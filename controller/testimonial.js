const Testimonial = require('../models/testimonials')
const { v4: uuidv4 } = require('uuid')
const AWS = require('aws-sdk')
const formidable = require('formidable')
const slugify = require('slugify')
const fs = require('fs')

module.exports = {
    add,
    all,
    update
}

const s3 = new AWS.S3({ 
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
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
    const {name, company, website, title, heading, content} = fields 
    const {file} = files
    const slug = slugify(name)
    let testimonial = new Testimonial({name, company, title, heading, content, slug, website, file})
    console.log(testimonial)
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
            res.json(err)
        }
        return res.json(success)
        })
    })

    })
}

async function all(req, res){
    Testimonial.find({}, function(err, all){
        if(err){
            console.log(err)
            return res.json({ error: "Could not get testimonials from db"})
        }else{
            return res.json(all)
        }
    })
}

async function update(req, res){
    console.log(req.body)
    if(req.body.status !== 'delete'){
    Testimonial.findByIdAndUpdate({_id: req.body.id}, req.body, function(err, success){
        if(err){
            console.log(err)
            return res.json({ error: "Could not update testimonials"})
        }else{
            return res.json(success)
        }
    })
    }

    if(req.body.status === 'delete'){
        Testimonial.deleteOne({_id: req.body.id}, function(err, success){
            if(err){
                console.log(err)
                return res.json({ error: "Could not update testimonials"})
            }else{
                return res.json(success)
            }
        })
    }
}