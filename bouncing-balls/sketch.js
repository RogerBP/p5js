let limit_circle;
let ball;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ball = new Ball(windowWidth / 2, windowHeight / 2, 10);
  limit_circle = {
    radius: width / 2,
    x: width / 2,
    y: height / 2,
  }
}

function draw() {
  background(0);
  circle(limit_circle.x, limit_circle.y, limit_circle.radius * 2)
  ball.update();
  check_limits(ball);
  ball.render();

  noFill();
  stroke(255);

}

function check_limits(b) {
  const center = createVector(limit_circle.x, limit_circle.y);
  const dist = p5.Vector.dist(center, b.pos);
  if (dist >= limit_circle.radius) {
    b.pos.sub(b.spd);
    b.spd.rotate(60);
  }
}