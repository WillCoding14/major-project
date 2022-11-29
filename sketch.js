// Jump King(){
// let name = Will;
// let date = November 17, 2022;
//}
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

  update(){
    this.x = mouseX;
    this.y = mouseY;
  }
}

class Platform{

}

let thePLatforms = [];
let hit = false;
let player;

function setup(){
  createCanvas(windowWidth, windowHeight);
  player = new Player(mouseX, mouseY, 100, 100);
}

function draw() {
  background(255);
  rect(200, 200, 100, 150);
  player.display();
  player.update();

  hit = collideRectRect(200, 200, 100, 150, player.x, player.y, player.w, player.h);

  stroke(hit ? color("red") : 0);
  print("colliding?", hit);
}