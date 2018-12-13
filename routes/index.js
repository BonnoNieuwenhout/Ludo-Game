var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.sendFile("splash.html", {root: "./public"});
});

/* Pressing the play button will return the game.html page */
router.get("/play", function(req, res){
  res.sendFile("game.html", {root: "./public"});
});

router.get("/*", function(req, res){
  res.send("Not a valid route");
});
module.exports = router;
