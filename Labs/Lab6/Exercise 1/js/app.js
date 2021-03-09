let myCircle = {
  color: 0,
  x: 400,
  y: 300,
  size: 50
  }

function setup(){
  createCanvas(800,600)
}

function draw(){
  fill(myCircle.color)
  myCircle.size+=1
  circle(myCircle.x,myCircle.y,myCircle.size)

  
}