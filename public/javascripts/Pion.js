document.getElementById("Pion").onclick = function() { movePion() };

const diceroll = require('./dice')
    let number = diceroll.number;
    
function movePion(){
    var Pion = document.getElementById("Pion");
    var Position = document.getElementsByClassName("Position");
    var PositionId = Position.getElementById("")
    var Movement = document.getElementById(PositionId + number);
    //The Pions can move over open dots that each have an id that is
    //in increasing order. The Pion should move to the open dot with the rolled
    //dice number, so to the open dot with the current ID number and the added
    //dicenumber
    if(number == 1){
        if(PositionId.innerHTML = Pion){
            Movement.innerHTML = Pion;
        } 
    }
}