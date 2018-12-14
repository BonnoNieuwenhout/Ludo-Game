const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const imageData1 = ctx.createImageData(10, 10);
const imageData2 = ctx.createImageData(10, 10);
const imageData3 = ctx.createImageData(10, 10);
const imageData4 = ctx.createImageData(10, 10);
const imageData5 = ctx.createImageData(10, 10);


// Iterate through every pixel
for (let i = 0; i < imageData1.data.length; i += 4) {
  // Modify pixel data
  imageData1.data[i + 0] = 255;  // R value
  imageData1.data[i + 1] = 255;    // G value
  imageData1.data[i + 2] = 255;  // B value
  imageData1.data[i + 3] = 300;  // A value
}
for (let i = 0; i < imageData2.data.length; i += 4) {
  // Modify pixel data
  imageData2.data[i + 0] = 250;  // R value
  imageData2.data[i + 1] = 0;    // G value
  imageData2.data[i + 2] = 0;  // B value
  imageData2.data[i + 3] = 300;  // A value
}
for (let i = 0; i < imageData3.data.length; i += 4) {
  // Modify pixel data
  imageData3.data[i + 0] = 0;  // R value
  imageData3.data[i + 1] = 0;    // G value
  imageData3.data[i + 2] = 200;  // B value
  imageData3.data[i + 3] = 300;  // A value
}
for (let i = 0; i < imageData4.data.length; i += 4) {
  // Modify pixel data
  imageData4.data[i + 0] = 0;  // R value
  imageData4.data[i + 1] = 200;    // G value
  imageData4.data[i + 2] = 0;  // B value
  imageData4.data[i + 3] = 300;  // A value
}
for (let i = 0; i < imageData5.data.length; i += 4) {
  // Modify pixel data
  imageData5.data[i + 0] = 250;  // R value
  imageData5.data[i + 1] = 250;    // G value
  imageData5.data[i + 2] = 0;  // B value
  imageData5.data[i + 3] = 300;  // A value
}

function createMap(){
  var map = new Array();
  map.push([0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0]);
  map.push([2, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1]);
  map.push([1, 2, 2, 2, 2, 0, 4, 4, 4, 4, 1]);
  map.push([1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 4]);
  map.push([0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 1, 5, 1, 0, 0, 0, 0]);
  map.push([0, 0, 0, 0, 5, 1, 1, 0, 0, 0, 0]);
  return map;
}

var boardmap = createMap();
for(var i=0; i<11; i++){
  for(var j=0; j<11; j++){
    switch(boardmap[j][i]){
      case 0: break;
      case 1: ctx.putImageData(imageData1, 5+10*i, 5+10*j); break;
      case 2: ctx.putImageData(imageData2, 5+10*i, 5+10*j); break;
      case 3: ctx.putImageData(imageData3, 5+10*i, 5+10*j); break;
      case 4: ctx.putImageData(imageData4, 5+10*i, 5+10*j); break;
      case 5: ctx.putImageData(imageData5, 5+10*i, 5+10*j); break;
    }
  }
}