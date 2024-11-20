let limit_circle;
let ball;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ball = new Ball(windowWidth / 2, windowHeight / 2, 20);
}

function draw() {
  background(0);
  ball.update();
  ball.render();
  check_limits(ball);
}

function check_limits(b) {
  if (b.pos.x >= width - 10 || b.pos.x <= 10 ||
    b.pos.y >= height - 10 || b.pos.y <= 10) {
    b.pos.sub(b.spd);
    b.spd.rotate(90);
  }
}