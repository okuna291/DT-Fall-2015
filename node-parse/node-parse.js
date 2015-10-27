///Parse data
var Parse = require('node-parse-api').Parse;
var APP_ID = "XJNn37IzR9zLDuz1ydnWKQltHsNaep9JTmh0n1pi";
var MASTER_KEY = "gLFpue05vkTntYNEN4K4uXgkqLqaCVwtxhlygKyq";
var appParse = new Parse(APP_ID, MASTER_KEY);

var bodyParser = require('body-parser');
var express = require("express");
var app = express();
var port = 8000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);


///create server
app.use(express.static(__dirname + ''));
console.log('Simple static server listening at '+url+':'+port);

app.get('', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('YOUR SERVER IS RUNNING')

})


io.sockets.on('connection', function (socket) {
  

  socket.on('sendToParse', function (data) {
    console.log(data);
    appParse.insert('Students', { firstName: data.firstName,lastName:data.lastName,age:data.age,pet:data.pet,drake:data.drake }, function (err, response) {
  	// console.log(response);
  	console.log("entry made");
	});
  });


socket.on('getFromParse', function (data) {
    appParse.find('Students', '', function (err, response) {
  console.log(response);
  socket.emit('toScreen',{ ParseData: response });
});
   
  });







});
///INSERT OBJECT
// appParse.insert('Students', { name: 'wole',age:"20" }, function (err, response) {
//   console.log(response);
// });

///FIND ONE
// appParse.find('Students', {objectId: 'rGP6EQe35h'}, function (err, response) {
//   console.log(response);
// });

///FIND MANY
// appParse.find('Students', {where: {name: 'ayo'}}, function (err, response) {
//   console.log(response);
// });

///FIND ALL
// appParse.find('Students', '', function (err, response) {
//   console.log(response);
// });

///DELEATE OBJECT
// appParse.delete('Students', 'rGP6EQe35h', function (err, response) {
//   // response = {} 
// });