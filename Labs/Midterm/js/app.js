yPos = [0,0,0,0,0,0,0,0,0,0]
//Holds the number of circles that need to be made
moveY = 1;
//Used to animate the circles when the mouse is pressed 

function setup(){
    createCanvas(800,600);
}

function draw(){
    yPos.push(mouseY);
    yPos.shift();
    //Trailing of 10 circles following the mouse when not pressed  
     r = mouseY/2
  //Makes the circles bigger based on Y position.Make circles smaller based on X position 
    colors = [mouseY, 0,255]
    //follows mouse poistion on the Y axis, other numbers are color ranges. 
     if(mouseIsPressed){
        //if statement animates the circles downward at 3 pixels when the mouse button is pressed.
        moveY = moveY + 3;
        
        if(moveY > 600){
            moveY = 0;
        }
        fill(colors);
        circle(400, moveY, r); 
    
    }
    
    else{
        //makes the circles follow the mouse whenever the mouse button is not pressed 
        for(i = 0; i < yPos.length; i++){
        fill(colors);
        circle(400, yPos[i], r);  
        }
        
    }
}