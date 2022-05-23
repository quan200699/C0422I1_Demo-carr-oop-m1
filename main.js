let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let car = new Car(10, 300, 100, 50, 10);
let obstacle = new Obstacle(200, 10, 50, 50, 10);
obstacle.drawObstacle(ctx);
car.drawCar(ctx);

function move() {
    switch (event.keyCode) {
        case 37: {
            car.moveLeft();
            break
        }
        case 38: {
            car.moveUp();
            break;
        }
        case 39: {
            car.moveRight();
            break;
        }
        case 40: {
            car.moveDown();
            break;
        }
    }
    update();
}

function update() {
    ctx.clearRect(0, 0, 800, 600);
    obstacle.drawObstacle(ctx);
    car.drawCar(ctx);
}

function moveObstacle() {
    if (obstacle.y >= 600) {
        obstacle.y = 0;
    }
    obstacle.moveDown();
    update();
    requestAnimationFrame(moveObstacle);
}

moveObstacle();

// setInterval(moveObstacle, 1000)
