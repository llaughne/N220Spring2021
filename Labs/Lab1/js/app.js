function setup() {
    createCanvas(800,600);
    
    var purple =('#8750c7')
    
    fill(purple)
    circle(400,300,200)
    
    stroke(0);
    strokeWeight(20)
    line(300,138,300,463)
    line(500,462,500,138)

    strokeWeight(10)
    fill(255,255,255)
    circle (500,300,40)
    circle(300,300,40)
    
    fill(0,0,0)
    circle(300,300,20)
    circle(500,300,20)
    
    strokeWeight(8)
    fill(232, 169, 208)
    arc(400, 460, 150, 200, PI, TWO_PI)
   
}