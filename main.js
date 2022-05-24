let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let car = new Car(10, 300, 100, 50, 10);
let obstacle = new Obstacle(200, 10, 50, 50, 20);
obstacle.drawObstacle(ctx);
car.drawCar(ctx);
let intervalId;

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
    checkCollision();
}

function moveObstacle() {
    if (obstacle.y >= 600) {
        obstacle.y = 0;
    }
    obstacle.moveDown();
    update();
}

function checkCollision() {
    if (obstacle.y + obstacle.height - obstacle.speed >= car.y && obstacle.y + obstacle.height  - obstacle.speed <= car.y + car.height) {
        if (car.x <= obstacle.x + obstacle.width && car.x >= obstacle.x) {
            alert('thua');
            clearInterval(intervalId);
        } else if (car.x + car.width <= obstacle.x + obstacle.width && car.x + car.width >= obstacle.x) {
            alert('thua');
            clearInterval(intervalId);
        } else if (obstacle.x <= car.x + car.width && obstacle.x >= car.x) {
            alert('thua');
            clearInterval(intervalId);
        } else if (obstacle.x + obstacle.width <= car.x + car.width && obstacle.x + obstacle.width >= car.x) {
            alert('thua');
            clearInterval(intervalId);
        }
    }
}

intervalId = setInterval(moveObstacle, 100)
