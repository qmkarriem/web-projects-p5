let drum;
//preload is another special p5.js function. Its for any resources or data you need to wait to load.
function preload() {
    drum = loadSound("media/drums.wav");
}
function setup() {
    background(0);
   drum.play();
}
function draw() {
    if (mouseIsPressed) {
        //drum.play(); //but this will trigger multiple instances of the sound and clip
    } 
}