let xPos = 0
let yPos = 300
let move = 5
function setup(){
    createCanvas(800,600)
}

function draw() {
    background(0)
    xPos = xPos + move
    yPos = yPos + 0
     circle(xPos,yPos,50)
     if (xPos > width) {
        move = -5;
        }
        xPos = xPos + move;
        }




