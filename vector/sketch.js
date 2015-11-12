function setup() {

createCanvas(700, 700);
}


// function draw() {
// var v1 = createVector(100, 100);
// ellipse(v1.x, v1.y, 50, 50);
// var angle=degrees(v1.heading());
// print(angle);
// }

// function draw() {
// var v1 = createVector(40, 50);
// var v2 = createVector(80, 100);
// fill(0);
// ellipse(v1.x, v1.y, 50, 50);
// fill(100);
// ellipse(v2.x, v2.y, 50, 50);
// print("V1= "+v1.heading()+" | V2= "+v1.heading());
// v1.add(v2);
// fill(255,0,0);
// ellipse(120, 150, 55, 55);
// fill(255);
// ellipse(v1.x, v1.y, 50, 50);
// }

////
// function draw() {
// var v1 = createVector(0, 100);
// var v2 = createVector(100, 0);
// ellipse(v1.x, v1.y, 50, 50);
// ellipse(v2.x, v2.y, 50, 50);
// var angle = p5.Vector.angleBetween(v1, v2);
// var angle=degrees(v1.heading());
// print('Angle between V1 & V2 is '+angle);
// }

////magnitude
// function draw() {
// var v1 = createVector(0, 100);
// ellipse(v1.x, v1.y, 50, 50);
// var m = v1.mag();
// print(m);
// }

// function draw() {
// var v1 = createVector(0, 100);
// ellipse(v1.x, v1.y, 50, 50);
// v1.set(0,150);
// ellipse(v1.x, v1.y, 50, 50);
// var m = v1.mag();
// print(m);
// }


////distance
// function draw() {
// var v1 = createVector(0, 100);
// var v2 = createVector(300, 300);
// ellipse(v1.x, v1.y, 50, 50);
// ellipse(v2.x, v2.y, 50, 50);
// var distance = p5.Vector.dist(v1,v2);
// print(distance);
// }

// function draw() {
// var v = p5.Vector.fromAngle(radians(45));
// var distance=100;
//   var vx = v.x;
//   var vy = v.y;
//   ellipse(vx*distance, vy*distance, 50, 50);
// }

// function draw() {
// var v = p5.Vector.random2D();
// var distance=500;
//   var vx = v.x;
//   var vy = v.y;
//   ellipse(vx*distance, vy*distance, 50, 50);
// }