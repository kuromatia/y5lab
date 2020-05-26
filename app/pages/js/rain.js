var rain = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 400; i++) {
    rain[i] = new rainManager();
  }
}


function draw() {
  background(255, 175, 170);
  for (var i=0,len=rain.length; i<len; i++) {
    rain[i].drop();
    rain[i].show();
  }
}


function rainManager() {
  this.x = random(width);
  this.y = random(-height, 0);

  this.z = random(5, 20);
  this.rainLen = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 20, 1, 20);


  this.drop = function() {
    this.y = this.y + this.yspeed;
    var gravity = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + gravity;
    if (this.y > height) {
      this.y = random(height);
      this.yspeed = map(this.z, 0, 20, 1, 20);
    }
  }

  this.show = function() {
    strokeWeight(map(this.z, 0, 20, 1, 3));
    stroke(0, 0, 255);
    line(this.x, this.y, this.x, this.y + this.rainLen);
  }
}
