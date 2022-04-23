const express = require('express')
const router = express.Router()

let data = [{
        postTitle: "Ecole 42 Okulları Hakkında - 1",
        postSubTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rerum.",
        postYazar: "Mücahit Buğday",
        postRead: 10,
        postLike: 25,
        postKategory: "#teknoloji" + "#eğitim"
    },
    {
        postTitle: "Ecole 42 Okulları Hakkında - 2",
        postSubTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rerum.",
        postYazar: "Mücahit Buğday",
        postRead: 10,
        postLike: 25,
        postKategory: "#teknoloji" + "#eğitim"
    },
    {
        postTitle: "Ecole 42 Okulları Hakkında - 3",
        postSubTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rerum.",
        postYazar: "Mücahit Buğday",
        postRead: 10,
        postLike: 25,
        postKategory: "#teknoloji" + "#eğitim"
    },
]

let home = [{
    home_title: "Merhaba",
    home_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, rerum.",

}]

router.get('/', (req, res) => { res.render('index', { title: 'Anasayfa', data: data, home: home }) })
router.get('/admin', (req, res) => { res.render('./admin/index', { title: 'Anasayfa' }) })
router.get('/blog-detay', (req, res) => { res.render('blog-detay', { title: 'blog-detay', data: data }) })

module.exports = router
