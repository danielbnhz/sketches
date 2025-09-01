import { animate, utils, createDraggable, createSpring } from 'animejs';
import p5 from "p5";

// Export your sketch function as default
export default function sketch(p) {
  let particles = [];

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }
  };

  p.draw = () => {
    p.background(20, 20, 30, 100);
    for (let particle of particles) {
      particle.update();
      particle.edges();
      particle.show();
    }
  };

  class Particle {
    constructor() {
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.vel = p5.Vector.random2D().mult(p.random(0.5, 2));
      this.size = p.random(2, 6);
      this.color = p.color(
        p.random(100, 255),
        p.random(100, 255),
        p.random(200, 255),
        200
      );
    }

    update() {
      this.pos.add(this.vel);
    }

    edges() {
      if (this.pos.x < 0 || this.pos.x > p.width) this.vel.x *= -1;
      if (this.pos.y < 0 || this.pos.y > p.height) this.vel.y *= -1;
    }

    show() {
      p.noStroke();
      p.fill(this.color);
      p.circle(this.pos.x, this.pos.y, this.size);
    }
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };


  
}
