// set up canvas
function setup() {
  createCanvas(400, 400);
  
  // create player character sprite
  player = createSprite(200, 200, 50, 50);
  player.shapeColor = color(255, 0, 0);
  
  // create enemy sprite
  enemy = createSprite(300, 200, 50, 50);
  enemy.shapeColor = color(0, 0, 255);
}

// draw player and enemy sprites to canvas
function draw() {
  background(255);
  drawSprites();
}

// move player sprite left and right using arrow keys
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.position.x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    player.position.x += 10;
  }
}

// move enemy sprite towards player sprite
function mousePressed() {
  enemy.velocity.x = (player.position.x - enemy.position.x) / 20;
  enemy.velocity.y = (player.position.y - enemy.position.y) / 20;
}