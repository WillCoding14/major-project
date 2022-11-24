// Jump King(){
// let name = Will;
// let date = November 17, 2022;
//}



let scr = 0;
let state = "start";
let player = new Player(mouseX, mouseY);
let platform = new Platform(200, 200, 100, 150);

class Player{
  constructor(x, y){
    this.playerX = x;
    this.playerY = y;
    this.playerW = 200;
    this.playerH = 200;
  }
}

class Platform{
  constructor(x, y, w, h){
    this.platformX = x;
    this.platformY = y;
    this.platformW = w;
    this.platformH = h;
  }

  display(){
    rectMode(CORNER);
    rect(this.platformX, this.platformY, this.platformW, this.platformH);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
