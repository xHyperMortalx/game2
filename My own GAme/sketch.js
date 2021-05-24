var boy, boyImage;
var backgroundImg
var egg1, egg1Img;
var egg2, egg2Img;
var egg3, egg3Img;
var egg4, egg4Img;
var bg
var hole

function preload(){
  boyImage = loadImage ("boy.png")
  backgroundImg = loadImage("park.jpg")
  egg1Img = loadImage("egg1.png")
  egg2Img = loadImage("egg2.png")
  egg3Img = loadImage("egg3.png")
  egg4Img = loadImage("egg4.png")
  HoleImg = loadImage("hole.png")
}

function setup() {
createCanvas(800,800)
 bg = createSprite(800,400,2000,800)
 bg.addImage(backgroundImg)
 bg.scale = 1.9
 bg.velocityX = -4
  boy = createSprite(110,560,30,30)
  boy.addImage(boyImage)
  boy.debug = true;
  boy.scale = 0.8
obstaclesGroup = new Group();
eggsGroup = new Group();
 


}

function draw() {
background("green")


if (bg.x < 0){
  bg.x = bg.width/2;
}
spawnEggs();
spawnObstacles();
drawSprites();
}

function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(2000,700,80,10);
    var rand = Math.round(random(0,750));
    obstacle.addImage(HoleImg)
    obstacle.y = rand
    obstacle.velocityX = -8
    
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 1000;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 
    
  
  
function spawnEggs(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(2000,700,10,40);
    obstacle.velocityX = -8
    obstacle.debug = true;

    
     //generate random obstacles
     var rand = Math.round(random(1,4));
     switch(rand) {
       case 1: obstacle.addImage(egg1Img);
               break;
       case 2: obstacle.addImage(egg2Img);
               break;
       case 3: obstacle.addImage(egg3Img);
               break;
       case 4: obstacle.addImage(egg4Img);
               break;
       
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 1000;
    
    //add each obstacle to the group
    eggsGroup.add(obstacle);
  }
 }

