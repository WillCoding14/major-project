let player;
let dummy;

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 10;

  player = new Sprite();
  player.w = 100;
  player.h = 100;
  player.y = height/2;
  player.x = width/2 + 200;

  dummy = new Sprite();
  dummy.w = 100;
  dummy.h = 100;
  dummy.y = height/2;
  dummy.x = width/2;
  dummy.collider = "static";
  player.direction = 190;
  player.speed = 2;
}

function draw(){
  if (mouse.presses()) {
    //        (position, speed)
    player.moveTo(mouse, 100);
  }
  clear();
}