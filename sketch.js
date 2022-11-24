// Jump King(){
// let name = Will;
// let date = November 17, 2022;
//}

let hit = false;

class Player{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display(){
    rect(this.x, this.y, this.w, this.h);
  }
}

class Platform{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display(){
    rect(this.x, this.y, this.w, this.h);
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(255);
  let player = new Player(0, height-50, width, 50);
  let newPlatform = new Platform(mouseX, mouseY, 50, 75);

  hit = collideRectRect(newPlatform.x, newPlatform.y, newPlatform.w, newPlatform.h, player.x, player.y, player.w, player.h);

  stroke(hit ? color("red") : 0);
  print("colliding?", hit);
}
