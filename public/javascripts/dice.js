document.getElementById("dice").onclick = function() { diceroll() };

function diceroll(){
        
            var number = Math.floor(Math.random()*6) + 1;
            var dicenumber = document.getElementById("dice");
            
            if(number == 1){
                dicenumber.innerHTML = "<img src=images/dice1.png>";
            }

            if(number == 2){
                dicenumber.innerHTML = "<img src=images/dice2.png>";
            }

            if(number == 3){
                dicenumber.innerHTML = "<img src=images/dice3.png>";
            }

            if(number == 4){
                dicenumber.innerHTML = "<img src=images/dice4.png>";
            }

            if(number == 5){
                dicenumber.innerHTML = "<img src=images/dice5.png>";
            }

            if(number == 6){
                dicenumber.innerHTML = "<img src=images/dice6.png>";
            }
            
        }

        //I dont know if this is a fix for the reference error
        //Cant seem to fix it
        (module || {}).exports = number;