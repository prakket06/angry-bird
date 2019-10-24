var fixrect, movingrect;

function setup() {
  createCanvas(1200,800);
  fixrect = createSprite(600, 400, 50, 80);
  movingrect = createSprite(400,200,80,30);
  fixrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  fixrect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if(movingrect.x - fixrect.x < movingrect.width /2 + fixrect.widht / 2 && fixrect.x - movingrect.x <  movingrect.width /2 + fixrect.widht / 2){
      fixrect.shapeColor = "red";
      movingrect.shapeColor = "red";
  }
  else{
    fixrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  drawSprites();
}