/*
 * @name Acceleration Ball Bounce
 * @description Move an ellipse around based on accelerationX and accelerationY values, and bounces when touch the edge of the canvas.
 */

// Position Variables
var x = 0; // note no need to define data type of variable... use var for all variables
var y = 0; // no need to use int, string, float, boolean, etc ... just use var
 
// Speed - Velocity
var vx = 0;
var vy = 0;
 
// Acceleration
var ax = 0;
var ay = 0;
 
var vMultiplier = 0.007;
var bMultiplier = 0.6;

function setup() { //setup ... fixes defined variables and size of canvas
    createCanvas(displayWidth, displayHeight);
    fill(0);
}

function draw() { // draw fuction similar to void draw() in processing
    background(255);
    ballMove();
    ellipse(x, y, 30, 30);
    toSerial(x,y,10);
}



function ballMove() {
    // calculations to make ball move
	ax = accelerationX;
	ay = accelerationY;

	vx = vx + ay;
	vy = vy + ax;
	y = y + vy * vMultiplier; 
	x = x + vx * vMultiplier;

	// Bounce when touch the edge of the defined canvas size
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > width - 20) { 
 		x = width - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > height - 20) { 
 		y = height - 20; 
 		vy = -vy * bMultiplier; 
 	}
	
}

