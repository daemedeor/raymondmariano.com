var express = require('express')
    , app = express()
    , path = require("path")
    , server  = require("http").createServer(app)
    , bodyParser = require("body-parser")
    , gif = require("./server/routes/gif.js")
    , config = require("./config/config");

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || config.portToListen);
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/gif", gif);

app.get("/contact", function(req,res){
  res.render("contact", {selected: '/contact', page: 'contact'});
});

app.get("/about", function(req,res){
  res.render("about", {selected: '/about', page: 'about'});
});

app.get("/videos", function(req,res){
    var menu = {
              title : { header: "Art", subtitle: "Galleries"},
              "concept": {selected: true, name: "Concept. Illustrations"},
              "design": "Designs. Graphic Art",
              "shirt": "Shirt Designs",
              "haa": "Hawaii Activities Authority",
              "hdu": "Hawaii Discovery University",
              "kombucha": "Kombucha Tea",
              "hrc": "Hawaii Rainbow Colors",
              "advert": "Advertisements",
              "stylus": "Stylus",
              "fruitNudes": "Fruity Nudes",
              "painting": "Painting",
              "charcoal": "Charcoal Drawing",
              "photo": "Photography"
              }

  res.render("videos", {selected: '/videos', page: 'videos'});
});

app.get("/artportfolio", function(req, res) {

  var menu = {
              title : { header: "Art", subtitle: "Galleries"},
              "concept": {selected: true, name: "Concept. Illustrations"},
              "design": "Designs. Graphic Art",
              "shirt": "Shirt Designs",
              "haa": "Hawaii Activities Authority",
              "hdu": "Hawaii Discovery University",
              "kombucha": "Kombucha Tea",
              "hrc": "Hawaii Rainbow Colors",
              "advert": "Advertisements",
              "stylus": "Stylus",
              "fruitNudes": "Fruity Nudes",
              "painting": "Painting",
              "charcoal": "Charcoal Drawing",
              "photo": "Photography"
              }

  res.render("artportfolio", {selected: '/artportfolio', page: 'artportfolio', menu: menu});
});

app.get("/", function(req, res) {
  res.render("home", {selected: '/', page: 'home'});
});

server.listen(app.get('port'), function(){
    console.log("started on part", app.get("port"));
});
