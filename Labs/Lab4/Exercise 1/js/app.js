function setup() {
    createCanvas(800, 600);
}
function draw() {
    background(255);
    
    let colors = ['#ccf6c8','#fafcc2', '#f6d6ad' ]
    
        for (let x = 0; x < 3; x++) {
            let xpos = x *200;
        
            fill(colors[x]);
            rect(xpos, 400, 200, 100);
        }
    
 }