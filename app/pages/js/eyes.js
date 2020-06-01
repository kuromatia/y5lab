function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  stroke(0);
  strokeWeight(random(0, 15));
  ellipse(width/4, height/2, width/3, width/3);
  ellipse(width/4*3, height/2, width/3, width/3);
  makeEye(nisX+width/4, nisY+height/2, 50);
  makeEye(nisX+width/4*3, nisY+height/2, 40);

}


var nisX = 300;
var nisY = 450;
var noiseValX = Math.random()*100;
var noiseValY = Math.random()*100;

function makeEye(x, y, nisV=50){
  fill(0, 0, 0);
  stroke(255, 255, 255);
  strokeWeight(random(0, 10));
  ellipse(x, y, width/6);

  nisX = noise(noiseValX)*nisV;
  nisY = noise(noiseValY)*nisV;

  noiseValX += 0.01;
  noiseValY += 0.01;
}
