let i = 3;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255);
    fill(255, 0, 0);
  
    
    for (let row = 0; row <= i; row++) {
      
        
        for (let column = 0; column <= row ; column ++) {
           square(column * 50, row * 50, 50);
        }
    }
}

    