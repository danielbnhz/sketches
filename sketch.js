let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 150; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(20, 20, 30, 100); // dark translucent background (trail effect)
  
  for (let p of particles) {
    p.update();
    p.edges();
    p.show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.size = random(2, 6);
    this.color = color(random(100, 255), random(100, 255), random(200, 255), 200);
  }

  update() {
    this.pos.add(this.vel);
  }

  edges() {
    // bounce on edges
    if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
  }

  show() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);

    // optional: connect particles that are close
    for (let other of particles) {
      let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      if (d < 100) {
        stroke(150, 150, 255, 50);
        line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
