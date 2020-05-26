const express   	= require('express')
const router    	= express.Router()
const userCtrl		= require('../controller/user')

router.signup('/signup', userCtrl.create)

module.exports  = router