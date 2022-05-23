class Car {
    x;
    y;
    width;
    height;
    speed;

    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    moveUp() {
        this.y = this.y - this.speed;
    }

    moveDown() {
        this.y = this.y + this.speed;
    }

    moveRight() {
        this.x = this.x + this.speed;
    }

    moveLeft() {
        this.x = this.x - this.speed;
    }

    drawCar(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
}
