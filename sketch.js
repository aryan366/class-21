var movingRect,fixedRect,gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="crimson"
  movingRect.debug=true;
  fixedRect = createSprite(600,400,50,80)
  fixedRect.shapeColor = ("crimson")
  fixedRect.debug=true;
  gameobject1=createSprite(100,100,50,50);
  gameobject1.shapeColor="crimson"
  gameobject1.debug=true;
  gameobject2=createSprite(200,100,50,50);
  gameobject2.shapeColor="crimson"
  gameobject2.debug=true;
  gameobject3=createSprite(300,100,50,50);
  gameobject3.shapeColor="crimson"
  gameobject3.debug=true;
  gameobject4=createSprite(400,100,50,50);
  gameobject4.shapeColor="crimson"
  gameobject4.debug=true;
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if (isTouching(movingRect,gameobject2)){
    movingRect.shapeColor = ("blue");
    gameobject2.shapeColor = ("blue");
  }
    if (isTouching(movingRect,gameobject2)){
      movingRect.shapeColor = ("blue");
      gameobject2.shapeColor = ("blue");

  }
  else{
    movingRect.shapeColor = ("crimson");
  gameobject1.shapeColor = ("crimson");
  }
  drawSprites();


} 
