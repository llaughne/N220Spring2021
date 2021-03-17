

  function setup() {
    createCanvas(400, 400);
     }
  
  var startCircleXspeed = 2
    var startCircleYspeed = 3
    var circleX=200
    var circleY=200
    var circleXspeed=startCircleXspeed
    var circleYspeed=startCircleYspeed
    var ballHits=0
    
  function draw() {
    background(0);
    
    rect(380,mouseY-30,10,80);
    
      circle(circleX,circleY,10)
    
    
    move()
    
    
    if (circleY<=7.5 || circleY>=392.5) {
      circleYspeed*=-1
      
    }
    
    if (circleY<=mouseY+30 && 380>=circleX && circleY>=mouseY-30 && circleX>=372.5) {
      circleXspeed*=-1
   ballHits++
    }  
    
    
   
    if (circleX<=27.5){
      circleXspeed*=-1
    }
    
    if (circleY>30 && circleY<370) {
      systemY=circleY-30
    }
    
    if (circleX>400){
      circleX=200
      circleY=200
      circleXspeed=startCircleXspeed
      circleYspeed=startCircleYspeed
      
    }
    
    }
  
  function move() {
    circleX+=circleXspeed
    circleY+=circleYspeed
    circleXspeed*=1
    circleYspeed*=1
  }