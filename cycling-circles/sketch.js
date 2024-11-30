let circles = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  const q = 20;
  const size_base = min(width, height);
  const size = size_base / q;

  const diags = [
  ]

  for (let line = 0; line < q; line++) {
    const s = (line + 1) / 100;
    diags.push(
      { cond: (x, y) => { return x === y + line }, s: s }
    )
    diags.push(
      { cond: (x, y) => { return x + line === y }, s: s }
    )
  }

  for (let line = 0; line < q; line++) {
    for (let col = 0; col < q; col++) {
      const x = col * size + size / 2;
      const y = line * size + size / 2;
      let s = random(0.01, 0.05);

      diags.forEach(diag => {
        const isDiag = diag.cond(col, line);
        if (isDiag) {
          s = diag.s;
        }
      })

      let c = {
        x: x,
        y: y,
        r: size / 3,
        a: 0,
        s: s
      }
      circles.push(c)
    }
  }

}

function draw() {
  background(0);
  circles.forEach(c => drawCircle(c))
}

function drawCircle(c) {
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
