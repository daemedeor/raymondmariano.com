var express = require('express')
    , router = express.Router();

router.get('/', function(req, res) {
  res.render("gif", {selected: '/gif', page: 'gif'});
});

router.get("/:id", function(req,res){

});

module.exports = router;
