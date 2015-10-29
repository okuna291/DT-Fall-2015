var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var port = 8000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var sport = new SerialPort("/dev/ttyAMA0", { // create SerialPort instance called sport
  baudrate: 9600,// give baudrate
  parser: serialport.parsers.readline("\n") //parse data when end of line present
}, false);

app.use(express.static(__dirname + '/'));//serve diectory this file is in
console.log('Simple static server listening at '+url+':'+port);

//socket.io stuff
io.sockets.on('connection', function (socket) {//open io connection
sport.open(function(error) {//open serial connection
  if (error) {
    console.log('failed to open: ' + error);//if serial fails
  } else {
    // port.write("A");
    console.log('Serial open');
    socket.on('toColor', function (data) {//listen for "toColor" on socket port... if you toColor sent
    console.log(data);//log data
    console.log("You sent R=" + data.r + " G="+ data.g + " B="+ data.b);//extract values of keys
    socket.emit('toScreen', { r: data.r, g: data.g, b: data.b }); //emit to screen the data recived from socket io
    //sport.write("Data_Char_Limit\n"); //16characters
    sport.write("R"+data.r + " G"+ data.g + " B"+ data.b+" \n");//write to serial the data recived from socket io
  });
}
});
});