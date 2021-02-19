var rectX = [];
var rectY = []; 
function setup() {
  createCanvas(800, 600);
}
function draw() {
  background(0);
  noStroke();
  rectMode(CENTER);
  fill(255);
  for (var i = 0; i < rectY.length; i++) {
    rect(rectX[i], rectY[i], 50, 25);
    rectY[i] += 1;
  }
}
function mousePressed() {
  rectX.push(mouseX);
  rectY.push(mouseY);
}