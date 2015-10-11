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

app.get("/", function(req, res) {
    res.render("home");
});

server.listen(app.get('port'), function(){
    console.log("started on part", app.get("port"));
});
