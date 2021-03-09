let xPos=400;
let yPos=300;

function setup() {
createCanvas(800, 600);
fill(255);
}

function draw() {
background(0);
update();
}

function update()
{
if (keyIsDown(LEFT_ARROW)) {
xPos =xPos- 2;
}

if (keyIsDown(RIGHT_ARROW)) {
xPos =xPos+ 2;
}

if (keyIsDown(UP_ARROW)) {
yPos =yPos- 2;
}

if (keyIsDown(DOWN_ARROW)) {
yPos = yPos+ 2;
}


circle(xPos, yPos, 100);
}