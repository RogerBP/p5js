let limit_circle;
let balls = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  for (var i = 0; i < 1000; i++) {
    balls.push(
      new Ball(
        // windowWidth / 2,
        // windowHeight / 2,
        random(300, windowWidth - 300),
        random(300, windowHeight - 300),
        10)
    )
  }
  limit_circle = {
    radius: width / 2,
    x: width / 2,
    y: height / 2,
    angle: 0
  }
}

function draw() {
  background(0, 0, 0);
  draw_limit();
  balls.forEach(ball => {
    ball.update();
    check_limits(ball);
    ball.render();
  });
  noFill();
  stroke(255);
}

function draw_limit() {
  push();
  translate(
    limit_circle.x,
    limit_circle.y
  )
  rotate(limit_circle.angle)
  limit_circle.angle += 0.5;
  stroke(0, 250, 0)
  strokeWeight(10)
  circle(0, 0, limit_circle.radius * 2)
  stroke(250, 250, 0)
  line(
    0,
    -limit_circle.radius,
    0,
    -limit_circle.radius + 10,
  )
  line(
    0,
    limit_circle.radius,
    0,
    limit_circle.radius - 10,
  )
  line(
    - limit_circle.radius,
    0,
    - limit_circle.radius + 10,
    0,
  )
  line(
    limit_circle.radius,
    0,
    limit_circle.radius - 10,
    0,
  )
  pop();
}

function check_limits(b) {
  const center = createVector(limit_circle.x, limit_circle.y);
  const dist = p5.Vector.dist(center, b.pos);
  if (dist >= limit_circle.radius - 20) {
    b.pos.sub(b.spd);
    b.spd.rotate(60);
  }
}