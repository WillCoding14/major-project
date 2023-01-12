let player;
let ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Sprite(width/2, 300, 100, 100);
  ground = new Sprite(width/2, height/2, width, 30);
  world.gravity.y = 10;
  ground.collider = "static";

}

function draw() {
  background(0);
  if (kb.pressing("left")) {
    player.vel.x = -3;
  }
  else if (kb.pressing("right")) {
    player.vel.x = 3;
  }
  else{
    player.vel.x = 0;
  }
  clear();
}

function jump() {
  player.velocity.y = -10;
}
