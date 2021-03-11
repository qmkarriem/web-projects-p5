/*

===NOTES===

SHAPE
-point(), line(), rect(), ellipse(), triangle(), quad(), arc()
-rectMode(CORNER | CORNERS | CENTER | RADIUS) different specification modes for rect()
-ellipseMode(CENTER | RADIUS | CORNER  | CORNERS)
-draw arcs using degrees with radians(), or setting angleMode(DEGREES). Default is just using divisions of PI (constant)
-noStroke() and noFill() get rid of that respective aspect of a shape.
-can make thicker strokes and lines with strokeWeight()
-change how shape vertices render with strokeJoin(), and how the ends of lines look with strokeCap()

COLOR
-can set colors on background(), fill() and stroke() using a single value for grayscale, three values for RGB, or four for RBGA (transparency)
-can blend colors with layering and opacity

Basic approach is to do your fill & stroke settings, then draw a shape. The shape uses the most recent settings for stroke, fill, color.

BASIC MOTION
Translate position by using a variable and drawing some shape(s) as you change the variable each frame. Some techniques to start:
-mouseX, mouseY: follow the mouse
-Math.random: can jump randomly in an area, or move in a random direction by adding or subtracting from x/y position.



For next time, more motion:
-Easing
-Circular and Sinusoidal Motion
*/


function setup() { 
    rectMode(CENTER);
    let clientHeight = document.body.clientHeight; 
	let clientWidth = document.body.clientWidth;
	createCanvas(clientWidth, clientHeight); 
    //creates an HTML <canvas> element. defaults to 100x100 if not declared. Often we use numbers for this. But note that the canvas is an HTML element and we can set it with JS variables & treat it like any other HTML element. Because HTML canvas exists independently of p5.js, which is giving us tools to make it easier and more expressive to work with. 
	frameRate(60);
    
    
}

function draw() {
    background(255);
    fill(20,20, 100);
    
    fill(20,200,100, 45);
          
    /*stroke(255);
    ellipse(350, 120, 100, 100);
    line(10, 100, 200, 200);*/
    
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    
    //move with the mouse
    ellipse(mouseX, mouseY, 80, 80); 
    rect(400, 150, 100, 100);
    
    //randomize color
    stroke(randomInt(255), randomInt(255), randomInt(255)); 
    
    //randomize length, direction, position
    line(randomInt(width), randomInt(height), randomInt(width), randomInt(height)); 
    
    //beginShape() and endShape() contain vertex() functions (like point) that define all the vertices of a custom polygon
    //can use endShape(CLOSE) to connect the first and last points if they haven't been explicitly connected using vertex()*/
}

//using a lib doesn't constrain us to just the lib. We can still use all the vanilla JS. And most rely on you knowing how functions, objects, variables, loops and arrays work in vanilla. 
function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}