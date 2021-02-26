function setup() {
    createCanvas(2000, 1000);
}
function draw() {
    background(255);
    
    let colors = ['#00ff00','#ffea00', '#ff0000' ]
    
        for (let i = 0; i < 3; i++) {
            let ypos = i * 400;
        
            fill(colors[i]);
            circle(400, ypos, 200,);
        }
    
 }