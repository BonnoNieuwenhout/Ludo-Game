const tileWidth = 50;
var canvas = document.getElementById("gameboard");
var context = canvas.getContext("2d");

function Tile(color, width){
    var imgData = context.createImageData(width, width);
    var pos = 0;
    return imgData;
}

function createMap(){
    var map = new Array();
// 0:notile, 1:white, 2:blue, 3:red, 4:green, 5:yellow
    map.push([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
    map.push([0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0]);
    map.push([0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0]);
    map.push([0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0]);
    map.push([1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1]);
    map.push([1, 2, 2, 2, 2, 0, 4, 4, 4, 4, 1]);
    map.push([1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1]);
    map.push([0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0]);
    map.push([0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0]);
    map.push([0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0]);
    map.push([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
    return map;
}

var boardmap = createMap();
for(var i=0; i<11; i++){
    for(var j=0; j<11; j++){
        switch(boardmap[y][x]){
            case 0: break;
            case 1: context.putImageData(Tile("white ", tileWidth)); break;
            case 2: context.putImageData(Tile("blue ", tileWidth)); break;
            case 3: context.putImageData(Tile("red ", tileWidth)); break;
            case 4: context.putImageData(Tile("green ", tileWidth)); break;
            case 5: context.putImageData(Tile("yellow ", tileWidth)); break;
        }
    }
}