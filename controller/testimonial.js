const Testimonial = require('../models/testimonials')
const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')
const formidable = require('formidable')
const slugify = require('slugify')
const fs = require('fs')

module.exports = {
    add
}

const s3 = new AWS.S3({ 
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'us-west-1'
})

async function add(req, res){
    console.log(req.body)
    let form = new formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
    if(err){
        return res.status(400).json({
        error: "Song could not upload"
        })
    }

    console.table({err, fields, files})
    console.log(files)
    const {name, company, title, heading, content} = fields 
    const {file} = files
    const slug = slugify(name)
    let testimonial = new Testimonial({name, company, title, heading, content, slug, file})
    const params = {
        Bucket: 'codecallogiclab',
        Key: `testimonial/${uuidv4()}`,
        Body: fs.readFileSync(file.path),
        ACL: 'public-read',
        ContentType: 'image'
    }

    s3.upload(params, (err, data) => {
        if(err){res.status(400).json({error: 'Upload to s3 failed'})}
        console.log('AWS UPLOAD Res Data', data)
        testimonial.image.url = data.Location;
        testimonial.image.key = data.Key;
        
        testimonial.save((err, success) => {
        if(err) {
            console.log(err)
            res.status(400).json({error: 'Error saving song to db' })
        }
        return res.json(success)
        })
    })

    })
}