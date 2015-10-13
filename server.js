var express = require('express')
    , app = express()
    , path = require("path")
    , server  = require("http").createServer(app)
    , bodyParser = require("body-parser")
    , config = require("./config/config");

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || config.portToListen);
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/contact", function(req,res){
  res.render("contact", {selected: '/contact', page: 'contact'});
});

app.get("/about", function(req,res){
  res.render("about", {selected: '/about', page: 'about'});
});

app.get("/videos", function(req,res){
  res.render("videos", {selected: '/videos', page: 'videos'});
});

app.get("/gif", function(req, res) {
  res.render("gif", {selected: '/gif', page: 'gif'});
});

app.get("/artportfolio", function(req, res) {
  res.render("artportfolio", {selected: '/artportfolio', page: 'artportfolio'});
});

app.get("/", function(req, res) {
  res.render("home", {selected: '/', page: 'home'});
});

server.listen(app.get('port'), function(){
    console.log("started on part", app.get("port"));
});
