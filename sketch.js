var balloonPink, balloonPinkImage;
var balloonRed, balloonRedImage;
var balloonBlue, balloonBlueImage;
var balloonGreen, balloonGreenImage;
var bow, bowImage;
var ground, backgroundImage;


function preload(){
 balloonPinkImage = loadImage("pink.png");
 balloonRedImage = loadImage("red.png");
 balloonBlueImage = loadImage("blue.png");
 balloonGreenImage = loadImage("green.png");
 bowImage = loadImage("bow.png");
 groundImage = loadImage("background.png")
  
}

function setup() {
  createCanvas(600, 600);
  
  ground = createSprite(300,140,25,25);
  ground.addImage(groundImage);
  ground.scale = 2.5;

 
  bow = createSprite(560,200,25,25);
  bow.addImage(bowImage);
  
}

function draw() {
  background(191,225,255);
  
  ground.velocityX = -5;
  
  if(ground.x< 100) {
    ground.x = ground.width / 2;
  }
  
  for (var a = 50; a < 400; a=a+50) {
      balloonPink = createSprite(50, a + 100, 20, 20);
      balloonPink.addImage(balloonPinkImage);
  }
  for (var b = 50; b < 350; b=b+50) {
      balloonRed = createSprite(100, b + 120, 20, 20);
      balloonRed.addImage(balloonRedImage);
      balloonRed.scale = 0.08;
  }
  for (var c = 50; c < 300; c=c+50) {
      balloonBlue = createSprite(150, c + 140, 20, 20);
      balloonBlue.addImage(balloonBlueImage);
      balloonBlue.scale = 0.08;
  }
  for (var d = 50; d < 250; d=d+50) {
      balloonGreen = createSprite(200, d + 160, 20, 20);
      balloonGreen.addImage(balloonGreenImage);
      balloonGreen.scale = 0.069;
  }
  
  bow.y = mouseY;

  drawSprites();
  
}


