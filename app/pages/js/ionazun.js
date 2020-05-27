//Ionazun
var ionazun_list = [];
var hypocenterX = 0;
var hypocenterY = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);
  for (var i = ionazun_list.length - 1; i >= 0 ; i--) {
    var ionazun = ionazun_list[i];
    if (ionazun.dead) {
      ionazun_list.splice(i, 1);
    } else {
      ionazun.draw();
    }
  }

  if (frameCount % 10 == 0){
    hypocenterX = random(0, width);
    hypocenterY = random(0, height);

    ionazun_list.push(new explosionManager(hypocenterX, hypocenterY, 200, random(3, 5)));
    background(10, 0, 0);
  }
}


function explosion(x, y, r, theta, speed) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.theta = theta;
  this.speed = speed;
  this.dead = false;

  this.update = function() {
    if (this.dead) return;
    this.x += speed * cos(theta);
    this.y += speed * sin(theta);
    this.speed *= 0.9; //減速速度
    if (this.x < 0 || this.x > windowWidth) this.dead = true;
    if (this.y < 0 || this.y > windowHeight) this.dead = true;
    if (this.speed < 0.1) this.dead = true;
  }

  this.draw = function() {
    noStroke();
    fill(255, 204, 0);
    ellipse(this.x, this.y, this.r, this.r);
    fill(255, 0, 0);
    randx = random(1, 50);
    randy = random(1, 50)
    rect(this.x + randx, this.y + randy, this.r, this.r);
  }
}


function explosionManager(x, y, num, r) {
  this.pl = [];
  this.num = num;
  this.r = r;
  this.dead = false;

  for (var i = 0; i < this.num; i++) {
    var xx = x + random(-r, r);
    var yy = y + random(-r, r);
    this.pl.push(new explosion(xx, yy, this.r, atan2(yy-y, xx-x), random(0.3, 10))); //3は初速の上限
  }

  this.draw = function() {
    for (var i = this.pl.length - 1; i >= 0; i--) {
      var p = this.pl[i];
      p.update();
      if (p.dead) {
        this.pl.splice(i, 1);
        if (this.pl.length == 0) dead = true;
      } else {
        p.draw();
      }
    }
  }
}
