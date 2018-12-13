var express = require('express');
var router = express.Router();
var cookie = require("cookie-parser");
var app = express();

router.use(cookie());

/* GET home page. */
router.get("/", function(req, res) {
  var visits;
  visits = JSON.stringify(req.cookies).substring(11, 12);

  if(JSON.stringify(req.cookies).length == 15){
    visits = JSON.stringify(req.cookies).substring(11, 13);
  }

  visits++;
  res.cookie("Visits", visits, {maxAge: 30000000});
  res.render('splash.ejs', { gamesPlayed: gameStatus.gamesPlayed, gamesWon: gameStatus.gamesWon, playersOnline : gameStatus.playersOnline, visits: visits });
  //redundant
  //res.sendFile("splash.html", {root: "./public"});
});

/* Pressing the play button will return the game.html page */
router.get("/play", function(req, res){
  res.sendFile("game.html", {root: "./public"});
});

router.get("/*", function(req, res){
  res.send("Not a valid route");
});
module.exports = router;
