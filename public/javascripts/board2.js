const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imageData = ctx.createImageData(20, 20);

// Iterate through every pixel
for (let i = 0; i < imageData.data.length; i += 4) {
  // Modify pixel data
  imageData.data[i + 0] = 0;  // R value
  imageData.data[i + 1] = 0;    // G value
  imageData.data[i + 2] = 0;  // B value
  imageData.data[i + 3] = 200;  // A value
}

// Draw image data to the canvas
// ctx.putImageData(imageData, 10, 10);

function createMap(){
  var map = new Array();
  map.push([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
  map.push([1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]);
  map.push([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  map.push([1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1]);
  map.push([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]);
  return map;
}

var boardmap = createMap();
for(var i=0; i<11; i++){
  for(var j=0; j<11; j++){
    switch(boardmap[j][i]){
      case 0: break;
      case 1: ctx.putImageData(imageData, 10+20*i, 10+20*j);
    }
  }
}