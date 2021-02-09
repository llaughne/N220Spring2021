function setup(){
    createCanvas (800,600);
}
function draw(){
    background(255);

    noFill();

    for( var i = 1; i< 50; i++) {
        stroke(0 * i)
        
        circle(400,300, i * 6)

    }
}    