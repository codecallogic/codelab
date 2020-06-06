const express   	= require('express')
const router    	= express.Router()
const searchCtrl		= require('../controller/search')

router.get('/login', searchCtrl.login)
router.get('/callback', searchCtrl.callback)

module.exports  = router