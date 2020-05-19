var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloud_img;
var obstacle1_img,obstacle2_img,obstacle3_img,
obstacle4_img,obstacle5_img,obstacle6_img;

var count=0;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloud_img = loadImage("cloud.png");
  
  obstacle1_img = loadImage("obstacle1.png");
  obstacle2_img = loadImage("obstacle2.png");
  obstacle3_img = loadImage("obstacle3.png");
  obstacle4_img = loadImage("obstacle4.png");
  obstacle5_img = loadImage("obstacle5.png");
  obstacle6_img = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(180,190,200);
  
  textSize(25);
  count = Math.round(frameCount/4);
  text("Score: "+ count, 450, 50);
  
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawnClouds();
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
case 1:obstacle.addImage(obstacle1_img);
 break;
case 2:obstacle.addImage(obstacle2_img);
    break;
case 3:obstacle.addImage(obstacle3_img);
    break;
case 4:obstacle.addImage(obstacle4_img);
    break;
case 5:obstacle.addImage(obstacle5_img);
    break;
case 6:obstacle.addImage(obstacle6_img);
    break;
           }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 110;
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = random(80,120);
    cloud.addImage("cloud",cloud_img);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}