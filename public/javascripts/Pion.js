document.getElementById("Pion").onclick = function() { movePion() };

function movePion(){
    var Pion = document.getElementById("Pion");
    var Position = document.getElementById("Position");
    var PositionId = document.getElementById("Position").id;
    var Movement = document.getElementById(PositionId + number);
    //According to the rolled number the Pion should move to 
    //(The current Position number + the rolled dice number) id
    if(number == 1){
        if(Position.innerHTML = Pion){
            Movement.innerHTML = Pion;
        } 
    }
}