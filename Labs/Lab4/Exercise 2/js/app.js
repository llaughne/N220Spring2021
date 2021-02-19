var circle_coords=[]; 
var frames_count=0;

function setup() {
createCanvas(800, 600);
}

function draw() {

background(0);
for(let i = 0; i < circle_coords.length; i++){
    circle(width/2,circle_coords[i],30,30);
    circle_coords[i]=circle_coords[i]+5;

}
frames_count=frames_count+1;

if(frames_count==10){
    frames_count=0;

   circle_coords.push(0);
    if(circle_coords.length>100){

      circle_coords.shift();

    }

}
}



