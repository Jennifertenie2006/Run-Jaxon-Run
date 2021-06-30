var path,jake, leftBoundary,rightBoundary ;
var pathImg,jakeImg ;


function preload(){
  pathImg = loadImage("path.png");
  jakeImg = loadAnimation("runner-1.png","runner-2.png");
}

function setup(){
  createCanvas(400,400);
 
  // background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating  boy
jake = createSprite(180,340,200,200);
jake.scale=0.08;
jake.addAnimation("jakeRunning",jakeImg);
  
// creating Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // jake moving along with the mouse
  jake.x = World.mouseX;
  
  edges= createEdgeSprites();
  jake.collide(edges[3]);
  jake.collide(leftBoundary);
  jake.collide(rightBoundary);
  
  //reseting the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
