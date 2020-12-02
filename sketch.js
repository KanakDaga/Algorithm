var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(300,200,50,50);
  fixedRect = createSprite(400,200,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.y = mouseY;
  movingRect.x = mouseX;
  if(fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}