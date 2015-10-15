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
              "arithmagia": "Arithmagia",
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

router.get("/:gallery", function(req,res){
  var offBeatGalleryPages = ["haa", "hdu", "kombucha", "arithmagia", "hrc","adevrt", "stylus"];

  var requestedGallery = req.params.gallery;

  var currentPath = process.cwd();
  var filesInGallery = fs.readdirSync(currentPath + "/public/images/gallery/"+requestedGallery + "/small/");


  if(offBeatGalleryPages.indexOf(requestedGallery) == -1) {
    res.render('partial/artgallery/thumbnail.jade', {gallery: requestedGallery, pictures: filesInGallery});
  }else {

  }
});

module.exports = router;
