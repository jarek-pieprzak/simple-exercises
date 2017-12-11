// Planowanie zmiennych

    // ustawienia
    var snakeX = 2;
    var snakeY = 2;
    var height = 30;
    var width = 30;
    var interval = 100;
    var increment = 1;



    // zmienne gry
    var tailX = [snakeX];
    var tailY = [snakeY];
    var fX;
    var fY;
    var running;
    var gameOver;
    var direction = -1; // up = 0, down = -1, left = 1, right = 2
    var interval = 100;
    var int;



// ENTRY POINT OF GAME

function run() {
    init();
    int = setInterval(gameLoop, interval);

}

function init() {
    createMap();
    createSnake();
    createFruit();
}

// TWORZENIE TABLICY DLA SNAKE

function createMap() {

}