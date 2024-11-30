let circles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  const q = 20;
  const size_base = min(width, height);
  const c_size = size_base / q;

  const diags = [
  ]

  for (let line = 0; line < q; line++) {
    const s = (line + 1) / 150;
    diags.push(
      { cond: (x, y) => { return x === y + line }, s: s }
    )
    diags.push(
      { cond: (x, y) => { return x + line === y }, s: s }
    )
  }

  for (let line = 0; line < q; line++) {
    for (let col = 0; col < q; col++) {
      const x = col * c_size + c_size / 2;
      const y = line * c_size + c_size / 2;
      const pos = createVector(x, y);

      diags.forEach(diag => {
        const isDiag = diag.cond(col, line);
        if (isDiag) {
          s = diag.s;
        }
      })

      let c = {
        pos,
        r: c_size / 3,
        a: 0,
        s: s,
      }

      const p = p5.Vector.fromAngle(c.a);
      p.setMag(c.r);
      c.p = p;

      circles.push(c)
    }
  }

}

function draw() {
  background(0);
  circles.forEach(c => drawCircle(c))
}

function drawCircle(c) {
  noFill();
  stroke(255);
  strokeWeight(1);
  circle(c.pos.x, c.pos.y, c.r * 2);
  c.p.rotate(c.s);
  fill(255);
  circle(c.pos.x + c.p.x, c.pos.y + c.p.y, 10);
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
  let y = -c.r;
  fill(255);
  circle(0, y, 10);
  pop();
} 
