let player, platform;

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 15;

  platform = new Sprite(width/2, 400, width, 50, "static");

}

function draw() {
  clear();
}

function createPlayer(){
  player = new Sprite(width/2, 300, 100, 100, "dynamic");

}

function playerJump(){
  if (player.colliding(platform)){
    if (kb.presses("up")){
      player.collider = "dynamic";
      player.vel.y = -9;
    }
  }

}

