function setup() {
    createCanvas(800, 600);
    background(255);
}

function draw() {
    c = color(random(0, 255), random(0, 255), random(0, 255)); //random circle color placement and fill
    randomcircle(random(0, 800), random(0, 800), c);
}

function randomcircle(x, y, c) {  //circle function
    fill(c);
    ellipse(x, y, 60, 60);
    fill(255);
   
}