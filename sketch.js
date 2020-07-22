var bananaImage, obstacleImage , obstacleGroup,back ;
var palyer_running , backImage , Ground ;
 
var bananaGroup ;
 var obstacleGroup;

var obst

function preload(){

  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(600,300);
  
  score = 0 ;
  
back = createSprite(0,0,600,600);
back.addImage("jungle" ,backImage);
back.scale = 2 ;
back.x = back.width/2 ; 
back.velocityX = -4 ;

  Ground = createSprite(300,280,600,20);  
  Ground.x = Ground.width/2 ;
  Ground.velocityX = -2;
  Ground.visible = false;
  
    
  
  player = createSprite(50,180,20,50);
  player.addAnimation("running", player_running) ; 
  player.scale = 0.1 ;
  
   bananaGroup = new Group();
   obstaclesGroup = new Group();
  
}


function draw(){
 background(255); 
  
  
  if (Ground.x < 0){
   Ground.x = Ground.width/2;
  }
  
  if (back.x < 0){
   back.x = back.width/2;
  }   
  
  if(keyDown("space")){
    player.velocityY = - 12 ; 
  }
 
  
  
  player.velocityY = player.velocityY + 0.8 ;
  
  if(bananaGroup.isTouching(player)) {
    score = score + 2 ;
    bananaGroup.destroyEach();
  }
  
    
if(obstaclesGroup.isTouching(player))  {
player.scale = 0.2 ; 
}
  
switch(score) {
  case 10 :player.scale = 0.12 ; 
           break;
  case 20 :player.scale = 0.14 ; 
           break;
  case 30 :player.scale = 0.16 ; 
           break;
  case 40 :player.scale = 0.18 ; 
           break;
default:break;
}
                 
banana();
obstacles();

  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
   score = score + Math.round(getFrameRate()/60) ;
  text("score : " + score , 500,50 )
 
  player.collide(Ground);
}

function banana() {
if(frameCount % 80 === 0 )  {
  var banana=createSprite(601,120,20,20);
  banana.y =  Math.round(random(120,200));
  banana.addImage("banana",bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 160;
  bananaGroup.add(banana);
  banana.scale = 0.05 ; 
    
}
}

function obstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(401,332,10,40);
    obstacle.velocityX = -6 ; 
    obstacle.addImage( "stone" ,obstacleImage);
    obstacle.scale = 0.15;
    obstacle.lifetime = 70;
    obstaclesGroup.add(obstacle);
  }
}