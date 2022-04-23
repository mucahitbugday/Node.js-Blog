const express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var Blog = require("./models/blogModels");
var Home = require("./models/homeModels");

const app = express();
app.set("view engine", "ejs");

const port = 3000;
const server = app.listen(port, "localhost", () => {
    console.log("port: %d", server.address().port);
});

//Routes
const indexRoutes = require("./routes/indexRoutes");
const adminRoutes = require("./routes/adminRoutes");


//morgan ayarları gelen değerleri veri giden değerleri terminale basar
app.use(morgan("dev"));

//css, img, ... klasörleri tanımlanır
app.use(express.static("public"));

//data parsel işlemi
app.use(express.urlencoded({
    extended: true
}))

//Veritabanı bağlantısı
mongoose.connect("mongodb://localhost/db_blog_new", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        console.log(`Uygulama başladı  =>  Port: ${port}`)
        console.log('Veritabanı bağlantısı kuruldu')

    })
    .catch((err) => console.log(err))

//PostEkle
app.post("/admin/new-post", (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => (res.redirect("/admin/new-post")))
        .catch((err) => (console.log(err)))
});

//Anasayfa Yazı Ayarları
app.post('/admin/home-setting', (req, res) => {
    const home = new Home(req.body)
    home.save()
    .then((result) => {res.redirect('/admin/home-setting')})
})


app.get('/a', (req, res) => {
    Home.find() //veritabanındaki bilgileri çeler
      .then((result) => {
        res.render('index', {
          blogs: result //değişken olark index e gönderir
        })
      })
      .catch((err) => console.log(err))
  })


//Use Routes
app.use(indexRoutes);
app.use(adminRoutes);

app.use((req, res) => {
    res.status(404).render("404");
});
