const Music = require('../models/music')
const querystring = require('querystring');
const request = require('request')

module.exports = {
    login,
    callback,
}

const localSpotifyCallback = 'http://localhost:3001/api/search/callback';
const deployedSpotifyCallback = 'https://codecallogic.herokuapp.com/api/search/callback';
const localhostHome = 'http://localhost:3000/';
const herokuHome = 'https://codecallogic.herokuapp.com/';

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
      redirect_uri: deployedSpotifyCallback,
      state: state
    }));
}

async function callback(req, res){
    let code = req.query.code || null
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;
    console.log(code)

    if (state === null || state !== storedState) {
    console.log('Hello')
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
        redirect_uri: deployedSpotifyCallback,
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
        console.log(body)
        var access_token = body.access_token
        let uri = herokuHome
        res.redirect(uri + '?access_token=' + access_token)
    })
    }
}