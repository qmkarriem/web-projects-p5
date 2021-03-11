let radius = 25;
let x = -radius;
let y = 250;
let speed = 0.3; 

let angle = 0.0;
let offset = 180;
let scalar = 50;

function setup() {
    createCanvas(500, 500);
    ellipseMode(RADIUS);
    background(0);
}

function draw() {
    noStroke();
    x += speed; //linear horizontal
    y -= speed; //linear vertical
    
    x = offset + cos(angle) * scalar; // circular motion
    y = offset + sin(angle) * scalar;
    fill(120,120,180,60);
    ellipse(x, y, radius);
    angle += speed;
    scalar += speed;
    
}