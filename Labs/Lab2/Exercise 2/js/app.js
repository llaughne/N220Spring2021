function setup() {
  createCanvas(400, 300);
  }
  
  function draw() {
  background(255);
    
  if(mouseX>200)
  {
  fill("#e60707");
  circle(mouseX,mouseY,30);
  }
  else
  {
  fill("#1207e6");
  circle(mouseX,mouseY,30);
  }
  }