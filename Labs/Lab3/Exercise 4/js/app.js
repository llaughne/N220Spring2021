var nums = [100, 200, 300, 400]; // sizing for circles


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);
  //color randomimzer
  r = random(255); // r is a random number between 0 - 255
  g = random(0,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(100,255); // a is a random number between 100 - 255

  for (var i = 0; i < 4; i++) { // easy setup of four circles for a tunnel effect
    stroke(0);
    fill(r,g,b,a) // easy fill of randomsized colors 
    ellipse(400,300, nums[i], nums[i]);
  }
}