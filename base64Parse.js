var fs = require('fs');
var Parse= require('node-parse-api').Parse;
var APP_ID="******";
var MASTER_KEY = "******";
var appParse = new Parse(APP_ID, MASTER_KEY);
var async = require('async');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

// function to create file from base64 encoded string
function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}

// convert image to base64 encoded string
var base64str = base64_encode('cat.png');
appParse.insert('catPic', { name: 'cat64',image:base64str }, function (err, response) {
  // console.log(response);

  appParse.find('catPic', {where: {name: "cat64"}}, function (err, res) {
  console.log(res.results[0].image);
  base64_decode(res.results[0].image, 'catCopyFromParse.png');
});
});

  






