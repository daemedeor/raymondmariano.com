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
  res.render("contact", {selected: '/contact'});
});

app.get("/about", function(req,res){
  res.render("about", {selected: '/about'});
});

app.get("/videos", function(req,res){
  res.render("videos", {selected: '/videos'});
});

app.get("/gifs", function(req, res) {
  res.render("gifs", {selected: '/gifs'});
});

app.get("/artportfolio", function(req, res) {
  res.render("artportfolio", {selected: '/artportfolio'});
});

app.get("/", function(req, res) {
  res.render("home", {selected: '/'});
});

server.listen(app.get('port'), function(){
    console.log("started on part", app.get("port"));
});
