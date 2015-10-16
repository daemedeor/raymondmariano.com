var express = require('express')
    , router = express.Router()
    , fs = require('fs');
  var menu = {
              title : { header: "Art", subtitle: "Galleries"},
              "concept": {selected: true, name: "Concept. Illustrations"},
              "design": "Designs. Graphic Art",
              "shirt": "Shirt Designs",
              "haa": "Hawaii Activities Authority",
              "hdu": "Hawaii Discovery University",
              "kombucha": "Kombucha Tea",
              "arithmageia": "Arithmageia",
              "hrc": "Hawaii Rainbow Colors",
              "advert": "Advertisements",
              "stylus": "Stylus",
              "fruitNudes": "Fruity Nudes",
              "painting": "Painting",
              "charcoal": "Charcoal Drawing",
              "photo": "Photography"
            }

var metaData = {
  "haa": { title: "Hawaii Activities Authority", subtitle: "In progress.... Coming soon", description: "I was involved in working on a new mobile application that will put the spotlight on Hawaii activities and local products! I designed the layout and all of the graphic elements of this app."},
  "hdu": { title: "Hawaii Discovery University", subtitle: "Hawaii Adventure Coloring Book",  description: "\"Hawaii Discovery University for Kids\" is a new Hawaiian-themed coloring book application. It\'s a great way for kids to learn the culture, lifestyle, and beauty that makes Hawaii so special! Kids will enjoy many wonderful pages of art as they color!"},
  "hrc": { title: "Hawaii Rainbow Colors", subtitle:"A Hawaiian-themed coloring book"},
  "advert": { title: "Advertisements", description: "A sampling of different advertisements I have helped to design \(Advertisment samples used for mobile application startup. Photography elements are not credited to designer.\)"},
  "kombucha": { title: "East Week Kombucha Tea", description: "Designed the label for a tea product called East Week Kombucha.\nWhen I started the design, I made a quick sketch for each flavor as a mockup placeholder for the sake of composition. I had intended to replace the sketches with a cleaner image of each flavor but then the client was like,\n\"No, don\'t replace it! We like the look of those sketches!\"\nSo I left it."}, 
    "stylus": { title: "Stylus", description: "Two sides to love!\nOn one side, you have the smooth quality ball-point pen for all your note taking, scribbles and satisfaction of paper and pen contact. On the other end, you hav the easy-gliding stylus tip compatible on any touch-screen device so you can indulge in your love for technology. So go ahead, paper or tablet. With one of these babies around, you're always prepared"}
}
router.get('/', function(req, res) {


  var currentPath = process.cwd();
  var filesInGallery = fs.readdirSync(currentPath + "/public/images/gallery/concept/small/");

  res.render("artportfolio", {selected: '/artportfolio', page: 'artportfolio', menu: menu, gallery: "concept", pictures: filesInGallery});
});


router.get("/:gallery", function(req,res){
  var offBeatGalleryPages = ["haa", "hdu", "kombucha", "arithmageia", "hrc","advert", "stylus"];

  var requestedGallery = req.params.gallery;

  var currentPath = process.cwd();
  var filesInGallery = [], newFileImageObject,  coverflowArray = [], actualFileName, metaDataForPage, learnMore;
  
  if(offBeatGalleryPages.indexOf(requestedGallery) == -1) {

    filesInGallery = fs.readdirSync(currentPath + "/public/images/gallery/"+requestedGallery + "/small/");

    res.render('partial/artgallery/thumbnail.jade', {gallery: requestedGallery, pictures: filesInGallery});
  }else {

    filesInGallery = fs.readdirSync(currentPath + "/public/images/gallery/"+requestedGallery);
    console.log(filesInGallery);
    filesInGallery.forEach(function(e,i) {
      newFileImageObject = {};
      var findFileExtention = e.lastIndexOf(".");
      if( findFileExtention > -1){
        actualFileName = e.substr(0,findFileExtentionspa);
        newFileImageObject.title = actualFileName;
        newFileImageObject.description = "";
        newFileImageObject.image = "/images/gallery/"+requestedGallery +"/"+e;
        coverflowArray.push(newFileImageObject);    
      }

    });
    
    metaDataForPage = metaData[requestedGallery];
    
    res.render('partial/artgallery/coverflow.jade', {gallery: requestedGallery, coverflowItems: JSON.stringify(coverflowArray), title: (metaDataForPage) ? metaDataForPage.title : "", subtitle: (metaDataForPage) ? metaDataForPage.subtitle : "", description: (metaDataForPage) ? metaDataForPage.description : "", learnMore: (learnMore) ? learnMore : null});
  }
});

module.exports = router;
