'use strict';
var fs = require('fs');
var expect = require('chai').expect;

//I'm not sure how to include the path of the image which is up the stream
var bitmap = fs.readFileSync('/Users/tinaojha/Projects/Javascript/DA-Javascript/bitmap-transform/bitmap1.bmp');

var pixelsStart = bitmap.readUInt32LE(10);
var pixelsEnd = bitmap.length;
//I'm not sure how to include the path of the image which is up the stream
var transform = fs.readFileSync('/Users/tinaojha/Projects/Javascript/DA-Javascript/bitmap-transform/transformed.bmp');

describe ('Bitmap-transformer for non-palette image' , function(){
    it("should correctly invert an image", function() {
        for (var i = pixelsStart; i < pixelsEnd; i++)
         expect(transform.readUInt8(i)).to.eql(255 - bitmap.readUInt8(i));
    });

});
