

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  var ground=createSprite(800,300,400,10);
  var box1=createSprite(800,270,100,50);
  //box1.shapecolor("brown");
  var box2=createSprite(800,270,200,50);
  //box2.shapecolor("red");
  var box3=createSprite(800,270,300,50);
  var box4=createSprite(800,270,400,50);
  var box5=createSprite(800,220,150,50);
  var box6=createSprite(800,220,300,50);
  var box7=createSprite(800,220,400,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}