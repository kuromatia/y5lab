function Particle(x,y,hu,firework){
  this.pos = createVector(x, y);
  this.firework = firework; // boolian
  this.lifespan = 255; // variant of saturation and brightbess
  this.hu = hu; // hue (color)
  

  if(this.firework){
    this.vel = createVector(0, random(-12,-8));
  }else{
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2, 20)); //radius of explosion
  }
  this.acc = createVector(0,0);

  this.show = function(){
    colorMode(HSB);
    if(!this.firework){
      strokeWeight(2); // after explosion
      stroke(hu,this.lifespan/3 + 30,this.lifespan); //color
      // stroke(350, 28, 100);
      stroke(hu, 255, 255);
    }else{
      strokeWeight(4); // after explosion
      stroke(hu, 255, 255); // color
    }
    point(this.pos.x, this.pos.y) // stroke > point
  }

  this.done = function(){
    if(this.lifespan < 0){
      return true;
    }else{
      return false;
    }
  }
  this.update = function(){
    if(!this.firework){
      this.vel.mult(0.9);
      this.pos.y -= random();
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.applyForce = function(force){
    this.acc.add(force);
  }

}

function Firework(){
  this.hu = random(0,155);
  this.firework = new Particle(random(width),random(height-30,height),this.hu,true);
  this.exploded = false;
  this.particles = [];
  this.done = function(){
    if(this.exploded && this.particles.length === 0){
      return true;
    }else{
      return false;
    }
  }

  this.show = function(){
    if(!this.exploded){
      this.firework.show();
    }
    for(var i = 0; i< this.particles.length; i++){
      if(random() > 0.65){
        this.particles[i].show();
      }
    }
  }

  this.update = function(){
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
      if(this.firework.vel.y >= 0){
        this.exploded = true;
        this.explode();
      }
    }
    
    for(var i = this.particles.length - 1; i >= 0; i--){
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if(this.particles[i].done()){
        this.particles.splice(i,1);
      }
    }
  }

  this.explode = function(){
    for(var i= 0; i <100 ; i++){
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

}

// function special(){
// }


var fireworks = [];
var gravity;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.15);
  stroke(255);
  strokeWeight(3);
  background(0);
}

function draw(){
  colorMode(RGB);
  background(0,0,0,25);
  if(random() > 0.95){
    fireworks.push(new Firework());
  }
  for(var i = fireworks.length - 1; i>=0; i--){
    fireworks[i].update();
    fireworks[i].show();

    if(fireworks[i].done()){
      fireworks.splice(i,1);
    }
  }
}
