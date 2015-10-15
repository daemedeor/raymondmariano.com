var express = require('express')
    , router = express.Router()
    , fs = require('fs');

router.get('/', function(req, res) {
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

  res.render("videos", {selected: '/videos', page: 'videos', menu: menu});
});

router.get("/:video", function(req,res){

  var requestedPhoto = req.params.video;

  res.sendStatus(200);
});

module.exports = router;
