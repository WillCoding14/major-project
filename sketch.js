let ball, ground;

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 10;

  ball = new Sprite();
  ball.diameter = 50;
  ball.y = 30;

  ground = new Sprite();
  ground.collider = "static";
  ground.y = 190;
  ground.w = 400;
  ground.h = 5;
}

function draw() {
  clear();
}