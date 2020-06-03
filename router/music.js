const express   	= require('express')
const router    	= express.Router()
const musicCtrl		= require('../controller/music')

router.get('/login', musicCtrl.login)
router.get('/callback', musicCtrl.callback)

module.exports  = router