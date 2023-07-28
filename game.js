// Game Variables
var canvas, context;
var players = [];

// Player Class
function Player(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
}

Player.prototype.draw = function() {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, 20, 20);
};

// Game Initialization
function init() {
  canvas = document.getElementById("gameCanvas");
  context = canvas.getContext("2d");

  // Create Players
  players.push(new Player(100, 100, "red"));
  players.push(new Player(200, 200, "blue"));

  // Start Game Loop
  setInterval(gameLoop, 16); // 60 FPS
}

// Game Loop
function gameLoop() {
  update();
  draw();
}

// Update Game State
function update() {
  // Update Player Positions
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    player.x += Math.random() * 4 - 2;
    player.y += Math.random() * 4 - 2;
  }
}

// Render Game Objects
function draw() {
  // Clear Canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Players
  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    player.draw();
  }
}

// Start the Game
init();
