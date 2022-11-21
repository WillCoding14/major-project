// Jump King(){
// let name = Will;
// let date = November 17, 2022;
//}


let scr = 0;

class Player{
  constructor(){
    this.playerX = 0;
    this.playerY = 0;
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

    this.dx = 1;
    this.dy = 1;
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
