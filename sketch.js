let platform;
let player;

class p{
  constructor(x, y, w, h, col){
    this.x = width/2;
    this.y = 300;
    this.w = 100;
    this.h = 100;
    this.col = "dynamic";
  }
  display(){
    player = new Sprite(this.x, this.y, this.w, this.h, this.col);
  }
  jump(){
    
  }
}

function setup() {
  new Canvas(windowWidth, windowHeight);
  world.gravity.y = 15;

  platform = new Sprite(width/2, 400, width, 50, "static");
}

function draw() {
  clear();
}


function playerJump(){
  if (player.colliding(platform)){
    if (kb.presses("up")){
      player.collider = "dynamic";
      player.vel.y = -9;
    }
  }

}

