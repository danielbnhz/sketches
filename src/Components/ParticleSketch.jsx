// src/components/ParticleSketch.jsx
import React, { useRef, useEffect } from "react";
import p5 from "p5";

export default function ParticleSketch() {
  const sketchRef = useRef();

  useEffect(() => {
    let myp5;

    const sketch = (p) => {
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
    };

    // Mount the p5 instance
    myp5 = new p5(sketch, sketchRef.current);

    // Clean up on component unmount
    return () => {
      myp5.remove();
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
      }}
    />
  );
}
