let player;
let ground;
let platforms;
let button;
let backgroundimage;


let jumpcharge = 0;
let state = "start";


function setup() {
  createCanvas(windowWidth, windowHeight);
  //player and platforms creation
  player = new Sprite(width/2, 300, 100, 100, "k");
  ground = new Sprite(width/2, height/2, width - 100, 30, "static");
  ground.collider = "static";
  player.bounciness = 0;

  //world setup
  world.gravity.y = 15;

  //start screen
  backgroundimage = new Sprite(width/2, height/2, width, height, "static");
  backgroundimage.color = "black";
  

  button = new Sprite(width/2, height/2, 300, 100,"static");
  button.img = "assets/startbuttonimg.png";

  backgroundimage = (0, 0, width, height);
}

function draw() {
  if (state === "start"){
    background(0);
    player.visible = false;
    ground.visible = false;
    clear();
  }
  else if (state === "main"){
    background(0);
    move();
    
    if (kb.presses("space")){
      jumpLogic();
    }
    else{
      player.vel.x = 0;
    }
  }
  clear();
}


function jumpLogic() {
  player.velocity.y = -5;
  player.velocity.x = -5;
}

function move(){
  if (kb.pressing("left")) {
    player.vel.x = -5;
  }
  else if (kb.pressing("right")) {
    player.vel.x = 5;
  }
}