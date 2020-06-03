const querystring = require('querystring');
const request = require('request')

module.exports = {
    login,
    callback
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
  console.log('Hello')
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
        let uri = process.env.FRONTEND_URI || 'http://localhost:3000/admin'
        res.redirect(uri + '?access_token=' + access_token)
    })
    }
}