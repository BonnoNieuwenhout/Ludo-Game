/* Add the desired mesages in this file */

(function(exports){

    //Client to server, game is complete the winner is
    exports.T_GAME_WON_BY = "GAME-WON-BY";             
    exports.O_GAME_WON_BY = {
        type: exports.T_GAME_WON_BY,
        data: null
    };

    //The game has been aborted
    exports.O_GAME_ABORTED = {                          
        type: "GAME-ABORTED"
    };
    exports.S_GAME_ABORTED = JSON.stringify(exports.O_GAME_ABORTED);

    //Set as player A
    exports.T_PLAYER_TYPE = "PLAYER-TYPE";
    exports.O_PLAYER_A = {                            
        type: exports.T_PLAYER_TYPE,
        data: "A"
    };
    exports.S_PLAYER_A = JSON.stringify(exports.O_PLAYER_A);

    //Set as player B
    exports.O_PLAYER_B = {                            
        type: exports.T_PLAYER_TYPE,
        data: "B"
    };
    exports.S_PLAYER_B = JSON.stringify(exports.O_PLAYER_B);

    //Set as player C
    exports.O_PLAYER_C = {                            
        type: exports.T_PLAYER_TYPE,
        data: "C"
    };
    exports.S_PLAYER_C = JSON.stringify(exports.O_PLAYER_C);

    //Set as player D
    exports.O_PLAYER_D = {                            
        type: exports.T_PLAYER_TYPE,
        data: "D"
    };
    exports.S_PLAYER_D = JSON.stringify(exports.O_PLAYER_D);

    //It is now the Player's turn
    exports.T_YOUR_TURN = "YOUR-TURN";         
    exports.O_YOUR_TURN = {
        type: exports.T_YOUR_TURN,
        data: null
    };

    //Server to player => Player's PION has been slain
    exports.T_PION_IS_SLAIN = "YOUR-PION-HAS-BEEN-SLAIN";         
    exports.O_PION_IS_SLAIN = {
        type: exports.T_PION_IS_SLAIN,
        data: null
    };

    //Game is over with a win or loss
    exports.T_GAME_OVER = "GAME-OVER";              
    exports.O_GAME_OVER = {
        type: exports.T_GAME_OVER,
        data: null
    };

}(typeof exports === "undefined" ? this.Messages = {} : exports));
