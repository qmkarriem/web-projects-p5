let radius = 25;
let x = -radius;
let y = 250;
let speed = 0.1; 

let angle = 0.0;
let offset = 180;
let scalar = 50;

function setup() {
    createCanvas(500, 500);
    ellipseMode(RADIUS);
}

function draw() {
    background(0);
    x += speed; //linear horizontal
    y -= speed; //linear vertical 
    
   /* x = offset + cos(angle) * scalar; // circular motion
    y = offset + sin(angle) * scalar; */
    ellipse(x, y, radius);
    angle += speed;
}