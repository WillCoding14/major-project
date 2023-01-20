let player;
let ground;
let platforms;
let button;
let backgroundimage;


let jumpcharge = 0;
let state = "start";


function setup() {
  createCanvas(2050, 1000);
  //player and platforms creation
  player = new Sprite(width/2, 300, 100, 100, "k");
  ground = new Sprite(width/2, height/2, width - 100, 30, "static");
  ground.collider = "static";

  //world setup
  world.gravity.y = 15;

  //start screen
  backgroundimage = new Sprite(width/2, height/2, width, height, "static");
  backgroundimage.color = "black";
  
  button = new Sprite(width/2, height/2, 300, 100,"static");
  button.img = "assets/startbuttonimg.png";

  // button.img.scale.x = 0.5;
  // button.img.scale.y = 0.5;

  backgroundimage = (0, 0, width, height);
}

function draw() {
  if (state === "start"){
    mainScreen();
  }
  if (state === "main"){
    background(0);
    move();
    button.visible = false;
    backgroundimage.visible = false;

    player.visible = true;
    ground.visible = true;
    if (kb.presses("space")){
      jumpLogic();
    }
    else{
      player.vel.x = 0;
    }
  }
  clear();
}

function mainScreen(){
  background(0);
  player.visible = false;
  ground.visible = false;
  // if (button.mouse.hovering()){
  //   button.img = "assets/startbuttonhoverimg.png";
  // }
  // else{
  //   button.img = "assets/startbuttonimg.png";
  // }
  if (button.mouse.presses){
    state = "main";
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