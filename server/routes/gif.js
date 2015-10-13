var express = require('express')
    , router = express.Router();

router.get('/', function(req, res) {
  res.render("gif", {selected: '/gif', page: 'gif'});
});

router.get("/:photo", function(req,res){
  var arithmageiaCharacters = ["rokuro","aonghus", "teza", "syna", "quinajah", "tertius"];
  var requestedPhoto = req.params.photo;
  console.log(requestedPhoto);

  if(arithmageiaCharacters.indexOf(requestedPhoto) > -1){
    var arithageiaImageUrl = "/images/arithmageia/"+ requestedPhoto + ".gif";

    res.render("/partial/gif/arithmageia", {imgUrl: arithageiaImageUrl})
  }
  res.sendStatus(200);
});

module.exports = router;
