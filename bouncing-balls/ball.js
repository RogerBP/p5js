class Ball {
    constructor(x, y, radius) {
        this.pos = createVector(x, y);
        this.spd = createVector(random(1, 15), random(1, 15));
        this.spd.setMag(10);
        this.radius = radius;
        this.color = { r: random(255), g: random(255), b: random(255) }
    }
    update() {
        this.pos.add(this.spd);
    }
    render() {
        fill(this.color.r, this.color.g, this.color.b);
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }
}