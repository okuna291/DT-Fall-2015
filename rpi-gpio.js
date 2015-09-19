/////READ WRITE to GPIO with rpi-gpio using BOARD
var gpio = require('rpi-gpio');
 
function readInput() {
    gpio.read(7, function(err, value) {
    	if (value==1){
    		gpio.setup(11, gpio.DIR_OUT, write);
    	}
        console.log('The value is ' + value);
    });
}

function write() {
    gpio.write(11, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}

gpio.setup(7, gpio.DIR_IN, readInput);
