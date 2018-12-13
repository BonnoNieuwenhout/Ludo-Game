var express = require("express");
var http = require("http");
var websocket = require("ws");

var indexRouter = require("./routes/index");
var messages = require("./public/javascripts/messages");

var gameStatus = require("./statTracker");
var Game = require("./game");

var port = process.argv[2];
var app = express();

var cookie = require("./public/javascripts/cookie");


app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    //example of data to render; here gameStatus is an object holding this information
    res.render('splash.ejs', { gamesPlayed: gameStatus.gamesPlayed, gamesWon: gameStatus.gamesWon, playersOnline : gameStatus.playersOnline });
})
app.get("/", indexRouter);
app.get("/play", indexRouter);

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};


//regularly clean up the websockets object 
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

var currentGame = new Game(gameStatus.gamesPlayed++);
var connectionID = 0;//each websocket receives a unique ID

wss.on("connection", function (ws) {
    //Server communication with the client when a connection is established?
    setTimeout(function() {
         console.log("Connection state: "+ ws.readyState);
         ws.send("Thanks for the message. --Your server.");
         ws.close();
         console.log("Connection state: "+ ws.readyState);
    }, 2000);
    
    console.log("Player connected to game")
    ws.on("message", function incoming() {
         console.log("[LOG] ");
     });

    let con = ws;
    con.id = connectionID++;
    let playerType = currentGame.addPlayer(con);
    websockets[con.id] = currentGame;
    gameStatus.playersOnline++;

    console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

    con.send((playerType == "A") ? messages.S_PLAYER_A : messages.S_PLAYER_B && messages.S_PLAYER_C && messages.S_PLAYER_D);
    
    if(currentGame.hasFourConnectedPlayers()){
        currentGame = new Game(gameStatus.gamesPlayed++);
    }

    con.on("message", function incoming(message){

        let oMsg = JSON.parse(message);
        let gameObj = websockets[con.id];
        let isPlayerA = (gameObj.playerA == con) ? true : false;

        //Your turn function?
        if(isPlayerA){
            //Not your turn?
            if(oMsg.type == messages.T_YOUR_TURN){
                //Player B gets the message it is his turn

                if(gameObj.hasFourConnectedPlayers()){
                    gameObj.playerB.send(message);
                    gameObj.playerC.send(message);
                    gameObj.playerD.send(message);
                }
            }
        }
        else{
            if(oMsg.type == messages.T_YOUR_TURN){
                gameObj.playerA.send(message);
            }

            if(oMsg.type == messages.T_GAME_WON_BY){
                gameObj.setStatus(oMsg.data);
                //Update statistics, because a game has been won
                gameStatus.gamesWon++;
            }
        }
    });

    con.on("close", function (code){
        console.log(con.id + "disconnected ...");
        gameStatus.playersOnline--;

        if(code == "1001"){
            let gameObj = websockets[con.id];

            if(gameObj.isValidTransition(gameObj.gameStatus, "ABORTED")){
                gameObj.setStatus("ABORTED");
                gameStatus.gamesAborted++;

                //Check what connections are still open
                //Close those connections since a player left

                //Player A
                try{
                    gameObj.playerA.close();
                    gameObj.playerA = null;
                }
                catch(e){
                    console.log("Player A closing: " + e);
                }
                //Player B
                try{
                    gameObj.playerB.close();
                    gameObj.playerB = null;
                }
                catch(e){
                    console.log("Player B closing: " + e);
                }
                //Player C
                try{
                    gameObj.playerC.close();
                    gameObj.playerC = null;
                }
                catch(e){
                    console.log("Player C closing: " + e);
                }
                //Player D
                try{
                    gameObj.playerD.close();
                    gameObj.playerD = null;
                }
                catch(e){
                    console.log("Player D closing: " + e);
                }

            }
        }
    });
});

server.listen(port, function(){
    console.log("Server Started")
});