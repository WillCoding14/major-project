//Defining Variables
let player, lava, platforms, orbs, backgroundImg, finishline;
let startScreenImg, deathScreenImg, button;
let lavaLevel = 40;
let state = "start";
let playerSize = 30;
let ready = true;
let sizzle;
let winScreenImg;

//Loading sounds
function preload(){
  sizzle = "Assets/sizzle.mp3";
}
function setup() {
  //World setup
  new Canvas(windowWidth - 20, windowHeight - 20);
  world.gravity.y = 13;

  // Sprite setup
  player = new Sprite(width/16, 300, playerSize);
  player.color = "black";
  player.layer = 2;
  player.img = "Assets/redball.png";

  button = new Sprite(width/2, height/2, 700, 300, "static");
  button.img = "Assets/startbuttonimg.png";
  button.layer = 4;

  lava = new Sprite(width/2, height/2 + 400, width, 300, "static");
  lava.img = "Assets/lavaimg.png";
  lava.img.scale.x = 3;
  lava.img.scale.y = 2;

  backgroundImg = new Sprite(width/2, height/2, width, height, "none");
  backgroundImg.layer = 0;
  backgroundImg.img = "Assets/cavebackground.png";
  backgroundImg.scale.x = 2;
  backgroundImg.scale.y = 2;

  finishline = new Sprite(width - 34, height/2, 40, height, "none");
  finishline.img = "Assets/finishline.png";
  finishline.img.rotation = 90;
  finishline.collider = "static";

  startScreenImg = new Sprite(width/2, height/2, width, height, "none");
  startScreenImg.color = "black";
  startScreenImg.layer = 3;

  winScreenImg = new Sprite(width/2, height/2, width, height, "none");
  winScreenImg.img = "Assets/winscreenimg.png";
  winScreenImg.layer = 6;
  winScreenImg.visible = false;
  winScreenImg.img.scale.x = 2;
  winScreenImg.img.scale.y = 2;



  //death screen
  deathScreenImg = new Sprite(width/2, height/2, width, height, "none");
  deathScreenImg.img = "Assets/deathscreen.png";
  deathScreenImg.visible = false;
  deathScreenImg.layer = 6;
  deathScreenImg.text = "Press Ctrl + R to restart";
  deathScreenImg.textColor = "red";
  deathScreenImg.textSize = 40;
  deathScreenImg.text.y = width/2 + 200;

  //Groups Setup
  platforms = new Group();
  orbs = new Group();

  //Platforms setup
  for (let i = 0; i < 7; i++){
    let platform = new platforms.Sprite();
  }
  platforms.y = height/2;
  platforms.collider = "static";
  platforms.height = 5;
  platforms.width = 30;

  platforms.img = "Assets/platform.png";
  platforms[0].x = width/16;

  platforms[1].x = width/8;
  platforms[1].y = height/2 + 50;

  platforms[2].x = width / 4;
  platforms[2].y = height/2 - 25;

  platforms[3].x = width/3 + 40;
  platforms[3].y = height/2 - 25;

  platforms[4].x = width/2 + 400;
  platforms[4].y = height/2 + 150;

  platforms[5].x = width/2 + 600;
  platforms[5].y = height/2 + 150;

  //Jump recharge (orbs) setup
  for (let i = 0; i < 5; i++){
    let orb = new orbs.Sprite();
  }
  orbs.width = 10;
  orbs.height = 10;
  orbs.collider = "static";
  orbs.img = "Assets/orb.png";
  orbs[0].x = width/6 + 20;
  orbs[0].y = height/2;

  orbs[1].x = width/2 - 100;
  orbs[1].y = height/2 + 50;

  orbs[2].x = width/2 + 100;
  orbs[2].y = height/2 - 50;

  orbs[3].x = width/2 + 250;
  orbs[3].y = height/2 - 75;

  orbs[4].x = width/2 + 750;
  orbs[4].y = height/2 + 100;
}

function draw(){
  //Start screen state
  if (state === "start"){
    startScreen();
  }
  //Main game state
  else if (state === "main"){
    setUpMain(); 
    playerMove();
    checkReady();
    playerJump();
    deathCheck();
    winCheck();
  }
  //Death state
  else if (state === "death"){
    deathScreen();
  }
  else if (state === "win"){
    winScreen();
  }
  clear();
}

function playerMove(){
  //Move left
  if (kb.pressing("left")){
    player.vel.x = -3;
  }
  //Move right
  else if (kb.pressing("right")){
    player.vel.x = 3;
  }
  else{
    player.vel.x = 0;
  }
}

function checkReady(){
  if (player.collides(platforms) || player.overlaps(orbs)){
    ready = true;
    player.color = "green";
  }
}

function playerJump(){
  if (ready === true){
    if (kb.presses("space")){
      player.vel.y = -5;
      ready = false;
      player.color = "black";
    }
  }
}

function deathCheck(){
  if (player.collides(lava)){
    state = "death";
  }
}

function winCheck(){
  if (player.collides(finishline)){
    state = "win";
  }
}

function startScreen(){
  //Hiding main game
  orbs.visible = false;
  platforms.visible = false;
  finishline.visible = false;
  lava.visible = false;
  
  //Button changing color logic
  if (button.mouse.hovering()){
    button.img = "Assets/startbuttonhoverimg.png";
    if (button.mouse.presses()){
      state = "main";
    }
  }
  else{
    button.img = "Assets/startbuttonimg.png";
  }
}

function setUpMain(){
  button.remove();
  startScreenImg.visible = false;

  platforms.visible = true;
  orbs.visible = true;
  player.visible = true;
  lava.visible = true;
  finishline.visible = true;
}

function deathScreen(){
  deathScreenImg.visible = true;
  platforms.visible = false;
  orbs.visible = false;
}

function winScreen(){
  winScreenImg.visible = true;
  platforms.visible = false;
  orbs.visible = false;
}