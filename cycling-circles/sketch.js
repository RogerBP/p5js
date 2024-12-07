let circles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  const q = 20;
  const size_base = min(width, height);
  const c_size = size_base / q;
  const diags = []; // {s: 0.001, }

  for (let line = 0; line < q; line++) {
    // const s = random(0.01, 0.1)
    const s = (line + 1) / 100;
    const color = { r: random(255), g: random(255), b: random(255) }

    diags.push({ color, s, cond: (x, y) => x === y + line });
    diags.push({ color, s, cond: (x, y) => x + line === y });
  }

  for (let line = 0; line < q; line++) {
    for (let col = 0; col < q; col++) {
      const x = col * c_size + c_size / 2;
      const y = line * c_size + c_size / 2;
      let s = 0.01;
      let color = 0;

      diags.forEach(diag => {
        const isDiag = diag.cond(col, line);
        if (isDiag) {
          s = diag.s;
          color = diag.color;
        }
      })

      const c = { x: x, y: y, r: c_size / 3, a: 0, s: s, color: color }
      circles.push(c);
    }
  }
}

function draw() {
  background(0);

  circles.forEach(c => drawCircle(c));
}

function drawCircle(c) {
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(c.x, c.y, c.r * 2);
  fill(c.color.r, c.color.g, c.color.b);
  const p = p5.Vector.fromAngle(c.a);
  p.setMag(c.r);
  circle(c.x + p.x, c.y + p.y, 10);
  c.a += c.s;
}

function drawCircle_rotate(c) {
  push();
  translate(c.x, c.y);
  rotate(c.a);
  c.a += c.s;
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(0, 0, c.r * 2);
  fill(c.color.r, c.color.g, c.color.b);
  const y = - c.r;
  circle(0, y, 10);
  pop();
}
