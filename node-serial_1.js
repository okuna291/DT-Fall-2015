var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var GPIO = require('onoff').Gpio;
var port = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
}, false); // this is the openImmediately flag [default is true]

led = new GPIO(17, 'out');

port.open(function(error) {
  if (error) {
    console.log('failed to open: ' + error);
  } else {
    console.log('Serial open');
    port.on('data', function(data) {
    //console.log('data length: ' + data.length);
    light(data);

    console.log((data));
    });
}


  
});

function light(p1) {
    led.writeSync(parseInt(p1));              // The function returns the product of p1 and p2
}











