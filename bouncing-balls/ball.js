class Ball {
    constructor(x, y, radius) {
        this.pos = createVector(x, y);
        this.spd = createVector(5, 0);
        this.radius = radius;
    }
    update() {
        this.pos.add(this.spd);
    }
    render() {
        fill('yellow');
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius);
    }
}