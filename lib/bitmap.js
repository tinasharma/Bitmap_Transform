'use strict';

var fs = require('fs');
var bitmap = fs.readFileSync('bitmap1.bmp');

var orginal = bitmap;
var header = bitmap.toString('utf-8', 0, 2);

if (header != 'BM') {
  throw new Error('Its not a valid BMP file');
}

var color_start = 54;

function invertColors(color_start) {
  var original_b = bitmap.readUInt8(54);
  //reading and writing the bitmap file
  for (var i = 0; i < 256; i ++){
    //var fixed_b = 255 - bitmap.readUInt8(54);
    var b = 255 - bitmap.readUInt8(color_start);
    bitmap.writeUInt8(b, color_start);

    var g = 255 - bitmap.readUInt8(color_start + 1);
    bitmap.writeUInt8(g, color_start + 1);

    var r = 255 - bitmap.readUInt8(color_start + 2);
    bitmap.writeUInt8(r, color_start + 2);

    color_start += 4;
  }

  fs.writeFile('transformed.bmp', bitmap);

}

invertColors(color_start);

module.exports = invertColors();
