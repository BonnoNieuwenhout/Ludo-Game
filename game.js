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

//What to do now?