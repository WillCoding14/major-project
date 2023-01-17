let player;
let ground;
let platforms;
let jumpcharge = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = new Sprite(width/2, height/2, width - 100, 30);
  player = new Sprite(width/2, 300, 100, 100);
  world.gravity.y = 15;
  ground.collider = "static";
  player.bounciness = 0;
}

function draw() {
  background(0);
  if (kb.pressing("left")) {
    player.vel.x = -5;
  }
  else if (kb.pressing("right")) {
    player.vel.x = 5;
  }
  if (kb.presses("space")){
    jump();
  }
  else{
    player.vel.x = 0;
  }
  clear();
}


function jump() {
  player.velocity.y = -5;
}
