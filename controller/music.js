const Music = require('../models/music')
const Production = require('../models/production')
const querystring = require('querystring');
const request = require('request')
const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')
const formidable = require('formidable')
const slugify = require('slugify')
const fs = require('fs')

module.exports = {
    login,
    callback,
    saveRP,
    recentlyPlayed,
    upload,
    songList
}

const s3 = new AWS.S3({ 
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'us-west-1'
})

function songList(req, res){
  Production.find({}, function(err, songs){
    if(err){
      return res.status(400).json({
        error: "Songs could not load"
      })
    }
    res.json(songs)
  })
}

function upload(req, res){
  let form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    if(err){
      return res.status(400).json({
        error: "Song could not upload"
      })
    }

    console.table({err, fields, files})
    console.log(files)
    const {name, content, url} = fields 
    const {file} = files
    const slug = slugify(name)
    let production = new Production({name, content, url, slug, file})
    const params = {
      Bucket: 'codecallogiclab',
      Key: `production/${uuidv4()}`,
      Body: fs.readFileSync(file.path),
      ACL: 'public-read',
      ContentType: 'audio/wav'
    }

    s3.upload(params, (err, data) => {
      if(err){res.status(400).json({error: 'Upload to s3 failed'})}
      console.log('AWS UPLOAD Res Data', data)
      console.log(production)
      production.song.url = data.Location;
      production.song.key = data.Key;
      
      production.save((err, success) => {
        if(err) {
          console.log(err)
          res.status(400).json({error: 'Error saving song to db' })
        }
        return res.json(success)
      })
    })
    
  })
}

async function recentlyPlayed(req, res){
  try {
    const tracks = await Music.find().sort({_id:-1}).limit(1);
    res.json(tracks)
  } catch (error) {
    res.status(400).json(error)
  }
}

async function saveRP(req, res){
  console.log(req.body)
  try {
    const data = await Music.create(req.body)
    res.json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}

const generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = 'spotify_auth_state';

async function login(req, res){
    var state = generateRandomString(16);
    res.cookie(stateKey, state);
    res.redirect('https://accounts.spotify.com/authorize?'+
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: process.env.SCOPES,
      redirect_uri: process.env.REDIRECT_URI,
      state: state
  }));
}

async function callback(req, res){
    let code = req.query.code || null
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
        },
        headers: {
        'Authorization': 'Basic ' + (new Buffer(
            process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64'))
        },
        json: true
    }
    request.post(authOptions, function(error, response, body) {
        // console.log(body)
        var access_token = body.access_token
        let uri = process.env.FRONTEND_URI || 'https://codecallogic.herokuapp.com/admin'
        res.redirect(uri + '?access_token=' + access_token)
    })
    }
}