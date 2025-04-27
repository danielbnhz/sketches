function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  frameCount = frameCount > 500 ? 0 : frameCount

  let movementX = frameCount 




  rectMode(CENTER);
  const space = 40;
  const n = 400;

  for (x = 0; x < n; x+=space){
      for (y = 0; y < n; y+=space){
        line(x, y , x + space, y);
        line(x,y,x,y + space)
      }

      
  }

  circle(movementX,200, 40)

}
