const express   	= require('express')
const router    	= express.Router()
const musicCtrl		= require('../controller/music')

router.get('/login', musicCtrl.login)
router.get('/callback', musicCtrl.callback)
router.post('/saveRP', musicCtrl.saveRP)
router.get('/recentlyPlayed', musicCtrl.recentlyPlayed)
router.get('/search', musicCtrl.login)
router.post('/upload', musicCtrl.upload)
router.get('/songs', musicCtrl.songList)

module.exports  = router