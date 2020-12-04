var fixedRect, movingRect,obj3,obj4,obj5;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  obj3 = createSprite(700,150,30,80);
  obj3.shapeColor="green";
  obj4 = createSprite(1100,500,20,40);
  obj4.shapeColor="green";
  obj5 = createSprite(1100,700,30,30);
  obj5.shapeColor="green";
  //obj5.velocityX=5;
  obj5.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue"
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }

bounceOff(obj4,obj5);
  
  drawSprites();
}
