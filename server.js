var express = require('express')
    , app = express()
    , server  = require("http").createServer(app)
    , bodyParser = require("body-parser")
    , config = require("../config/config");