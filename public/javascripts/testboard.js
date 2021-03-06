function refreshBoard() {
    canvasWidth = window.innerHeight - 10;
    canvasHeight = window.innerHeight;
    maindiv.style.width = canvasWidth + "px";
    maindiv.style.height = canvasWidth + "px";
    ctx.canvas.width = canvasWidth;
    ctx.canvas.height = canvasWidth;
}
maindiv = document.getElementById("main");
canvas = document.getElementById("gameboard");
ctx = canvas.getContext("2d");
 
function drawSkyGradient() {
    var skyGradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    skyGradient.addColorStop(0, '#00aaff');
    skyGradient.addColorStop(1, '#ffffff');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}
tileWidth = Math.ceil(canvasWidth / 16);

function drawARegularTile(color, width) {
    var imgData = ctx.createImageData(width, width);
    var pos = 0;
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < width; y++) {
            var x2 = x - Math.ceil(width / 2);
            var y2 = y - Math.ceil(width / 2);
            var distance = Math.ceil(Math.sqrt(x2 * x2 + y2 * y2));
            var circlewall = Math.ceil(width / 2 * 0.8);
            var circleWidth = Math.ceil(width / 20);
            ys = new Array();
            for (var j = 0; j < circleWidth; j++) {
                ys.push(y - Math.ceil(circleWidth / 2 * 0.9) - +circleWidth + j);
            }
            if ((circlewall - circleWidth) < distance && distance < circlewall) {
                setColor("white");
            }
            else {
                setColor(color);
            }
            imgData.data[pos++] = colorR;
            imgData.data[pos++] = colorG;
            imgData.data[pos++] = colorB;
            imgData.data[pos++] = colorA;
        }
    }
    return imgData;
}
ctx.putImageData(drawARegularTile("purple ", tileWidth), 50,50);

function createMap() {
    var mapxy = new Array();
    //notile:0, purple:1,green:2,red:3,yellow:4;
    mapxy.push([0, 0, 0, 0, 1, 2, 3, 4, 1, 2, 3, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 3, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0]);
    mapxy.push([2, 3, 4, 1, 0, 0, 0, 4, 0, 0, 0, 3, 4, 1, 2]);
    mapxy.push([1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 3]);
    mapxy.push([4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4]);
    mapxy.push([3, 3, 3, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 1, 1]);
    mapxy.push([2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2]);
    mapxy.push([1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3]);
    mapxy.push([4, 3, 2, 1, 0, 0, 0, 2, 0, 0, 0, 3, 2, 1, 4]);
    mapxy.push([0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0]);
    mapxy.push([0, 0, 0, 0, 1, 4, 3, 2, 1, 4, 3, 0, 0, 0, 0]);
    return mapxy;
}

var boardmap = createMap();
for (var x = 0; x < 15; x++) {
    for (var y = 0; y < 15; y++) {
        switch (boardmap[y][x]) {
            case 0: break;
            case 1: ctx.putImageData(drawARegularTile("purple ", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
            case 2: ctx.putImageData(drawARegularTile("green", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
            case 3: ctx.putImageData(drawARegularTile("red", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
            case 4: ctx.putImageData(drawARegularTile("yellow", tileWidth), tileWidth / 2 + tileWidth * x, tileWidth / 2 + tileWidth * y); break;
            default: break;
        }
    }
}