const express   	        = require('express')
const router    	        = express.Router()
const testimonialCtrl		= require('../controller/testimonial')

router.post('/add', testimonialCtrl.add)

module.exports  = router