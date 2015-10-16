var express = require('express')
    , router = express.Router()
    , fs = require('fs');
    
var menu = {
                title : { header: "Videos", subtitle: ""},
                "demo": {selected: true, name: "Demo Reel"},
                "beach": "Beach Sunset Painting",
                "teacher": "Teacher Examples",
                "trees": "Two Trees"
            }

router.get('/', function(req, res) {


  res.render("videos", {selected: '/videos', page: 'videos', menu: menu});
});

router.get("/:video", function(req,res){

  var requestedPhoto = req.params.video;

  res.sendStatus(200);
});

module.exports = router;
