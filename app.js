var express = require("express");
var http = require("http");
var websocket = require("ws");

var indexRouter = require("./routes/index");
var messages = require("./public/javascripts/messages");

var gameStatus = require("./statTracker");
var Game = require("./game");

var port = process.argv[2];
var app = express();


app.use(express.static(__dirname + "/public"));

app.get("/", indexRouter);

//TODO: move to routes/index
app.get("/", (req, res) => {
    res.render("splash.html", {});
});
//how to get from the play button, 
//which leads to localhost:3000/play to the game.html?
app.use("/play", (req, res) =>{
    res.render("game.html", {});
});

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};

/*
 * regularly clean up the websockets object
 */ 
setInterval(function() {
    for(let i in websockets){
        if(websockets.hasOwnProperty(i)){
            let gameObj = websockets[i];
            //if the gameObj has a final status, the game is complete/aborted
            if(gameObj.finalStatus!=null){
                console.log("\tDeleting element "+i);
                delete websockets[i];
            }
        }
    }
}, 50000);
//Hoeze is dit geen constructor?
//var currentGame = new Game(gameStatus.gamesPlayed++);
var connectionID = 0;//each websocket receives a unique ID

wss.on("connection", function connection(ws) {
    //Server communication with the client when a connection is established?
    setTimeout(function() {
        console.log("Connection state: "+ ws.readyState);
        ws.send("Thanks for the message. --Your server.");
        ws.close();
        console.log("Connection state: "+ ws.readyState);
    }, 2000);
    
    ws.on("message", function incoming(message) {
        console.log("[LOG] " + message);
    });
});

server.listen(port);