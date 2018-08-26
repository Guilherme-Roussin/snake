var ctx = document.getElementById("myCanvas").getContext("2d")
const box = 20
var snake = [];
function Arena() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);
}
snake[0] = {
    x: 180,
    y: 300
}
let d;
document.addEventListener("keydown", direction);
function direction(event) {
    key = event.key;
    if (key == "ArrowLeft" && d != "RIGHT") d = "LEFT"
    else if (key == "ArrowUp" && d != "DOWN") d = "UP"
    else if (key == "ArrowRight" && d != "LEFT") d = "RIGHT"
    else if (key == "ArrowDown" && d != "UP") d = "DOWN"
}
function randStep() {
    return r = box * Math.floor(Math.random() * box);
}
var apple = {
    x: randStep(),
    y: randStep()
}
function Apple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(apple.x, apple.y, box, box);
}
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}
function draw() {
    Arena();
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'white';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    Apple();
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;
    if (snakeX == apple.x && snakeY == apple.y) {
        apple.x = randStep()
        apple.y = randStep()
    }
    else {
        snake.pop();
    }
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    if (snakeX < 0 || snakeX > 380 || snakeY < 0 || snakeY > 380 || collision(newHead, snake)) {
        clearInterval(game);
    }
    snake.unshift(newHead);
}
function name(params) {
    
}
let game = setInterval(draw, 60);