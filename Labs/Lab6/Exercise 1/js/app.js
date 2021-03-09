let myCircle = {
  color: 0,
  x: 400,
  y: 300,
  size: 200
  }

function setup(){
  createCanvas(800,600)
}

function draw(){
  fill(myCircle.color)
  myCircle.x+=1
  circle(myCircle.x,myCircle.y,myCircle.size)

  
}