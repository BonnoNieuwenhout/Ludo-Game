function diceroll( number){
    $.ajax({
        //url: /play?
        //type: ?
        succes: function (res){
            var number = Math.floor(Math.random()*6) + 1;
            var dicenumber = document.getElementById("four");
            
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
    });
}