//Every game has 4 players, identified by their websocket

var game = function(gameID){
    this.playerA = null;
    this.playerB = null;
    this.playerC = null;
    this.playerD = null;
    this.id = gameID;
    this.gameState = "0 JOINT";
};

//The game can be in many different states

game.prototype.transitionStates = {};
game.prototype.transitionStates["0 JOINT"] = 0;
game.prototype.transitionStates["1 JOINT"] = 1;
game.prototype.transitionStates["2 JOINT"] = 2;
game.prototype.transitionStates["3 JOINT"] = 3;
game.prototype.transitionStates["4 JOINT"] = 4;
game.prototype.transitionStates["PION MOVED"] = 5;
game.prototype.transitionStates["PION SLAIN"] = 6;
game.prototype.transitionStates["PION FINISHED"] = 7;
game.prototype.transitionStates["PION JOINT"] = 8;
//More PION statusses?
game.prototype.transitionStates["A"] = 9; //A won
game.prototype.transitionStates["B"] = 10; //B won
game.prototype.transitionStates["C"] = 11; //C won
game.prototype.transitionStates["D"] = 12; //D won
game.prototype.transitionStates["ABORTED"] = 13;


game.prototype.transitionMatrix = [
    [0, 1, 0, 0, 0, 0, 0],   //0 JOINT
    [1, 0, 1, 0, 0, 0, 0],   //1 JOINT
    [1, 1, 1, 0, 0, 0, 0],   //2 JOINT
    [1, 1, 1, 1, 0, 0, 0],   //3 JOINT
    [0, 0, 0, 1, 0, 0, 1],   //4 JOINT (note: once we have four players, there is no way back!)
    [0, 0, 0, 1, 1, 1, 1],   //Pion Moved
    [0, 0, 0, 0, 0, 0, 0],   //A WON
    [0, 0, 0, 0, 0, 0, 0],   //B WON
    [0, 0, 0, 0, 0, 0, 0],   //C WON
    [0, 0, 0, 0, 0, 0, 0],   //D WON
    [0, 0, 0, 0, 0, 0, 0]    //ABORTED
];

game.prototype.isValidTransition = function (from, to){
    console.assert(typeof from == "string", "%s: Expecting a string, got a %s", arguments.callee.name, typeof from);
    console.assert(typeof to == "string", "%s: Expecting a string, got a %s", arguments.callee.name, typeof to);
    console.assert( from in game.prototype.transitionStates == true, "%s: Expecting %s to be a valid transition state", arguments.callee.name, from);
    console.assert( to in game.prototype.transitionStates == true, "%s: Expecting %s to be a valid transition state", arguments.callee.name, to);

    let i, j;
    if (! (from in game.prototype.transitionStates)) {
        return false;
    }
    else {
        i = game.prototype.transitionStates[from];
    }

    if (!(to in game.prototype.transitionStates)) {
        return false;
    }
    else {
        j = game.prototype.transitionStates[to];
    }

    return (game.prototype.transitionMatrix[i][j] > 0);
};

game.prototype.isValidState = function (state){
    return(state in game.prototype.transitionStates);
};

game.prototype.setStatus = function (w){
    console.assert(typeof w == "string", "%s: Expecting a string, got a %s", arguments.callee.name, typeof w);

    if (game.prototype.isValidState(w) && game.prototype.isValidTransition(this.gameState, w)) {
        this.gameState = w;
        console.log("[STATUS] %s", this.gameState);
    }
    else {
        return new Error("Impossible status change from %s to %s", this.gameState, w);
    }
};

game.prototype.hasFourConnectedPlayers = function(){
    return (this.gameState == "4 JOINT");
};

game.prototype.addPlayer = function (player) {

    console.assert(player instanceof Object, "%s: Expecting an object (WebSocket), got a %s", arguments.callee.name, typeof player);

    if (this.gameState != "0 JOINT" && this.gameState != "1 JOINT" && this.gameState != "2 JOINT" && this.gameState != "3 JOINT") {
        return new Error("Invalid call to addPlayer, current state is %s", this.gameState);
    }

    var error = this.setStatus("3 JOINT");
    if(error instanceof Error){
        this.setStatus("4 JOINT");
    }

    if (this.playerA == null) {
        this.playerA = player;
        console.log("You are player A");
        return "A";
    }
    else {
        if(this.playerB == null){
        this.playerB = player;
        console.log("You are player B");
        return "B";
        }

        else{
            if(this.playerC == null){
            this.playerC = player;
            console.log("You are player C");
            return "C";
            }
            else{
                if(this.playerD == null){
                this.playerD = player;
                console.log("You are player D");
                return "D";
                }
            }
        }
    }
};

module.exports = game;

