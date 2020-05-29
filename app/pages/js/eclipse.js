var nisX = 300;
var nisY = 450;
var noiseValX = Math.random()*100;
var noiseValY = Math.random()*100;

function makeEclipse(x, y){
  fill(0, 0, 0);
  stroke(255, 255, 0);
  strokeWeight(random(0, 15));
  ellipse(x, y, width/3);
  
  nisX = noise(noiseValX)*200;
  nisY = noise(noiseValY)*200;

  noiseValX += 0.01;
  noiseValY += 0.01;
}


 function setup() {
   createCanvas(windowWidth, windowHeight);
 }

 function draw() {
   background(0);
   makeEclipse(nisX+width/2, nisY+height/2);
 }
