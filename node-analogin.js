//require onoff to get access to gpios
var gpio = require('onoff').Gpio;

 //require sleep to enable waiting for some time
var sleep = require ('sleep');

 //function which always returns one value if the pin changes his value
function RCtime(pin){
 //variable for saving our own-created "analogue" value
var reading = 0;

 //set pin to out and value to 0
var sensor = new gpio(pin,'out');


 sensor.write(0);
 //wait for 0.1 seconds 
 sleep.usleep(100000);
 //set pin as input 
 sensor=new gpio(pin,'in','both');
 //as long as the value of the pin is not reaching state 1 increase 
 //value reading
while(sensor.readSync()==false){
	reading++;}
 //if value of pin is 1, return "analogue" value
return reading;
 
};
 
while(true){
 //print analogue value
 console.log(RCtime(18));
 
};