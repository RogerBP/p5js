let circles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  const d = min(width, height);
  let c = { x: width / 2, y: height / 2, r: d / 3, a: 0 }
  circles.push(c)
}

function draw() {
  background(0);
  circles.forEach(c => drawCircle(c))
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
