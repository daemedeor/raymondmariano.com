var express = require('express')
    , router = express.Router()
    , fs = require('fs');

router.get('/', function(req, res) {
 var menu = {
          title : { header: "Animated", subtitle: "GIFs"},
          "rokuro": {selected: true, name: "Arithmageia - Rokuro"},
          "aonghus": "Arithmageia - Aonghus",
          "teza": "Arithmageia - Teza",
          "syna": "Arithmageia - Syna",
          "quinajah": "Arithmageia - Quinajah",
          "tertius": "Arithmageia - Tertius",
          "savannah": "Savannah Sun",
          "monster": "Monster Drink Toxic",
          "beach": "Beach at Dusk",
          "pillbox": "Pillbox Sunrise",
          "laugh": "Laugh Emoticon"
          }
  res.render("gif", {selected: '/gif', page: 'gif', menu: menu});
});

router.get("/:photo", function(req,res){
  var arithmageiaCharacters = ["rokuro","aonghus", "teza", "syna", "quinajah", "tertius"];
  var requestedPhoto = req.params.photo;

  if(arithmageiaCharacters.indexOf(requestedPhoto) > -1){
    var arithageiaImageUrl = "/images/arithmageia/"+ requestedPhoto + ".gif";

    res.render("/partial/gif/arithmageia", {imgUrl: arithageiaImageUrl})
  }
  res.sendStatus(200);
});

module.exports = router;
