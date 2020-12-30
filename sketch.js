var fixedRect, movingRect;
var GameObject1,GameObject2,GameObject3,GameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  GameObject1 = createSprite(100, 100, 50, 50)
  GameObject2 = createSprite(200, 100, 50, 50)
  GameObject3 = createSprite(300, 100, 50, 50)
  GameObject4 = createSprite(400, 100, 50, 50)

  GameObject1.shapeColor = "green"
  GameObject2.shapeColor = "green"
  GameObject3.shapeColor = "green"
  GameObject4.shapeColor = "green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(IsTouching(movingRect, GameObject4)){
    movingRect.shapeColor = "red"
    GameObject4.shapeColor = "red"
  } else {
    movingRect.shapeColor = "orange"
    GameObject4.shapeColor = "orange"
  }



  drawSprites();
}


function IsTouching(object1, object2){

  if (object1.x - object2.x < object1.width/2 +object2.width/2
    && object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.y - object2.y < object1.height/2 + object2.height/2
    && object2.y - object1.y < object1.height/2 +object2.height/2) {
    return true
  }
  else {
    return false
  }

}