const User = require('../models/user')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const mailgun = require('nodemailer-mailgun-transport')
const SECRET = process.env.SECRET

module.exports = {
        signup,
        login,
        email
}

async function login(req, res){
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return res.status(401).json({err: 'Bad Credentials'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch){
                const token = createJWT(user)
                res.json({token})
            }else{
                console.log('Error')
                return res.status(401).json({err: 'Bad Credentials'})
            }
        })
    }catch(err){
        return res.status(401).json(err)
    }
}

async function signup(req, res){
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json({token})
    }catch(err){
        res.status(400).json(err)
    }
}

function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}

async function email(req, res){
    console.log(req.body)
    const auth = {
        auth: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: 'www.codecallogic.com'
        }
    }

    const transporter = nodemailer.createTransport(mailgun(auth))
    
    const mailOptions = {
        from: req.body.email,
        to: 'contact@codecallogic.com',
        subject: req.body.name + 'has a project for you',
        text: req.body.content
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            console.log('Internal error')
        }else{
            console.log('Message sent')
        }
    })
}