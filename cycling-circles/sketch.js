let c = { x: 0, y: 0, r: 0, a: 0 }

function setup() {
  createCanvas(windowWidth, windowHeight);
  const d = min(width, height);
  c.x = width / 2;
  c.y = height / 2;
  c.r = d / 3;
  c.a = 0;
}

function draw() {
  background(0);
  drawCircle(c)
}

function drawCircle(c) {
  push();
  translate(c.x, c.y);
  rotate(c.a);
  c.a += 0.01;
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(0, 0, c.r * 2);

  let y = -c.r;
  fill(255);
  circle(0, y, 10);
  pop();
} 
