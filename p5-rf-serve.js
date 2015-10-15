var bodyParser = require('body-parser'); //import body-parser module
var express = require("express");//import express module
var serialport = require("serialport"); //import serial port module
var app = express(); // create instance of express
var port = 8000; //define port
var url='localhost' //define ip address of server
var server = app.listen(port);
var io = require("socket.io").listen(server);
var SerialPort = serialport.SerialPort; // create instance of serialport
var port = new SerialPort("/dev/ttyAMA0", { // define serial port to listen for data
  baudrate: 9600, // define rate of data tansfer
  parser: serialport.parsers.readline("\n") // read any data on serial untill end of line "\n"
}, false); 

app.use(express.static(__dirname + '')); // serve all contents of directory this file is in
console.log('Simple static server listening at '+url+':'+port); // print to console url (ip) and port used


io.sockets.on('connection', function (socket) { // start socket communication

socket.on('toSerial', function (data) { // listen (on) to socket comm.
    console.log(data); // print contents of socket to console
  });



port.open(function(error) { // start serial communication
  if (error) {
    console.log('failed to open: ' + error); // if serial communication fails
  } else { //if serial communication sucessfull do contents below
    console.log('Serial open'); //write "Serial open" to console
    port.on('data', function(data) { // listen for data form serial
    console.log(data); //write all the data to  console
    result = data.split(',') // split data using "," as delimiter in to result array
    result[3] // index 3 of results array
    socket.emit('toScreen', { r: result[1], g: result[2], b: result[3] }); // emit with socket communication a javascript object named "toScreen" with contents key:value pairs for index [1],[2],[3] of result array   
    });
}
});
});



