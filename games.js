const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player = { x: canvas.width / 2, y: canvas.height - 50, width: 20, height: 20, color: 'blue', speed: 5 };
let zombies = [];
let bullets = [];
let score = 0;
let spawnRate = 2000;
let gameOver = false;

// Player Movement
document.addEventListener('keydown', movePlayer);

// Shooting mechanic
document.addEventListener('click', shoot);

// Main game loop
function gameLoop() {
    if (!gameOver) {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    } else {
        displayGameOver();
    }
}

// Start the game loop
gameLoop();

// Functions: update, draw, zombie logic, collision detection, etc.
