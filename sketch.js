function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  frameCount = frameCount > 500 ? 0 : frameCount

  let movementX = frameCount /2
  frameRate(20)



  rectMode(CENTER);
  const space = 40;
  const n = 400;
  let seed_num = 2
  for (x = 0; x < n; x+=space){
    let num = Math.random() * seed_num
    seed_num > 40 ? 2 : seed_num * 2.3
      for (y = 0; y < n; y+=space){
        fill(222+num,222,222);
        triangle(x, y, x + space, y,2,2);
        fill(10+num,10,10+num)
        triangle(x,y,x,y + space,2,2)
      }

      
  }
  fill(255,255,255)
  circle(movementX,200 + sin(movementX)*40, 40)

}
