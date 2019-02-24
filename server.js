// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var pages = require("./app/routing/htmlRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(pages);

//Friend Data
//=============================================================
var friendArr = [
  {
  name: "Ahmed",
  photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
},
{
  name: "Josie",
  photo: "https://get.pxhere.com/photo/person-girl-woman-hair-photography-female-portrait-model-young-studio-fashion-black-lady-hairstyle-long-hair-make-up-black-dress-black-hair-face-dress-eye-head-skin-lips-pose-beauty-beautiful-sexy-style-elegant-pretty-posture-photoshoot-seductive-attractive-glamour-stylish-photo-shoot-brown-hair-portrait-photography-art-model-supermodel-916514.jpg",
  scores: [2, 4, 5, 1, 3, 2, 3, 1, 1, 4]
},
{
  name: "Bobby",
  photo: "https://cdn.pixabay.com/photo/2015/07/09/22/04/man-838636_960_720.jpg",
  scores: [2, 1, 2, 2, 3, 4, 1, 5, 3, 2]
},
{
  name: "Jane",
  photo: "https://get.pxhere.com/photo/person-people-girl-woman-hair-photography-cute-female-singer-brunette-portrait-model-young-human-fashion-lady-lip-hairstyle-makeup-feminine-eyebrow-mouth-long-hair-make-up-close-up-human-body-posing-black-hair-face-nose-eyes-lovely-eye-head-look-skin-lips-pose-beauty-beautiful-sexy-style-pretty-organ-femininity-attractive-elegance-lipstick-adult-glamour-stylish-vogue-photo-shoot-cosmetic-brown-hair-portrait-photography-art-model-supermodel-913380.jpg",
  scores: [4, 3, 3, 1, 2, 2, 5, 3, 3, 1]
},
];


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
