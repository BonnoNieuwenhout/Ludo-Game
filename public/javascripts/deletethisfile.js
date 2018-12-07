function Dice( value){
    this.value = value;

    this.roll = function(roll){

    }

    this.printNumber = function(printNumber){

    }
}

function roll(){
    var number = Math.floor(Math.random()*6) + 1;
    return number;
}

function printNumber(){
    this.roll();

    if(roll = 1){
        var image1 = document.createElement("img");
        image1.setAttribute('src', '/images/dice1');
        return image1;
    }

    if(roll = 2){
        var image2 = document.createElement("img");
        image2.setAttribute('src', '/images/dice2');
        return image2;
    }

    if(roll = 3){
        var image3 = document.createElement("img");
        image1.setAttribute('src', '/images/dice3');
        return image3;
    }

    if(roll = 4){
        var image4 = document.createElement("img");
        image4.setAttribute('src', '/images/dice4');
        return image4;
    }

    if(roll = 5){
        var image5 = document.createElement("img");
        image5.setAttribute('src', '/images/dice5');
        return image5;
    }

    if(roll = 6){
        var image6 = document.createElement("img");
        image6.setAttribute('src', '/images/dice6');
        return image6;
    }
}
