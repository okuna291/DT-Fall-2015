var PORT = 33333;
var HOST = '192.168.1.144'; //change to servers ip address

var dgram = require('dgram');
//var message = new Buffer('My KungFu is Good!');
var prompt = require('prompt');
prompt.start();
var message;
var bool = 0;

var client = dgram.createSocket('udp4');
var clientName="";

var serialport = require("serialport");//serial port instance
var SerialPort = serialport.SerialPort;
var sport = new SerialPort("/dev/cu.usbmodem1421", { // create SerialPort instance called sport
  baudrate: 9600,// give baudrate
  parser: serialport.parsers.readline("\n") //parse data when end of line present
}, false);

sport.open(function(error) {//open serial connection
  if (error) {
    console.log('failed to open: ' + error);//if serial fails
  } else {

clientPrompt();
sport.on('data', function(data) {
    //console.log('data length: ' + data.length);
    
    
    if (clientName!=""){
    	console.log(data);
    	message = new Buffer(clientName+","+data);
client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
				    if (err) throw err;
				    console.log('UDP message sent to ' + HOST +':'+ PORT); 
				});}

    });

}
});





function clientPrompt(){
	prompt.get(['clientName'], function (err, result){
	clientName=result.clientName;
	});//
	
	
}


function sendMessage() {

	


		
			// message = new Buffer(result.newMessage);

		
			// message = new Buffer(clientName+","+result.newMessage);

			
				client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
				    if (err) throw err;
				    console.log('UDP message sent to ' + HOST +':'+ PORT);
				    //bool == 1;
				    //client.close();
				    sendMessage();
				});
			
		
	

	
	
}

