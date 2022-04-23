const express = require('express')
const router = express.Router()

router.get('/admin/login', (req, res) => { res.render('./admin/login', { title: 'Giriş Yap' }) })
router.get('/admin/new-post', (req, res) => { res.render('./admin/new-post', { title: 'Yeni Yazı Ekle' }) })
router.get('/admin/home-setting', (req, res) => { res.render('./admin/home-setting', { title: 'Anasayfa Ayarları' }) })

module.exports = router
