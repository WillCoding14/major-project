//Defining Variables
let player, lava, platforms, orbs, backgroundImg, finishline;
let lavaLevel = 40;
let state = "main";
let playerSize = 30;
let ready = false;
let sizzle;

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
  /// player.img = "Assets/redball.png";

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
  // platforms.img = "Assets/platform.png";

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
    playerMove();
    checkReady();
    playerJump();
    deathCheck();
  }
  //Death state
  else if (state === "death"){
    deathScreen();
  }

  else if (state === "win"){
    lava.remove();
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
      ready = true;
      player.color = "black";
    }
  }
}

function deathCheck(){
  if (player.collides(lava)){
    player.remove();
    state = "death";
  }
}

function winCheck(){
  if (player.overlaps(finishline)){
    player.remove();
    state = "win";
  }
}

// function toggleReady(){
//   ready === !ready;
// }

function startScreen(){
}

function deathScreen(){
}