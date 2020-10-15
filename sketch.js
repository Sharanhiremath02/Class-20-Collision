var movingRec,fixedRec;


function setup() {
  createCanvas(1200,600);
  fixedRec = createSprite(400, 200, 50, 80);
  fixedRec.shapeColor= "green";
  fixedRec.debug=true;
  movingRec = createSprite(600,400,80,50);
  movingRec.shapeColor="green";
  movingRec.debug=true;
  
  
}

function draw() {

  background(0); 
  
  movingRec.x=mouseX;
  movingRec.y=mouseY;

  if(movingRec.x-fixedRec.x< movingRec.width/2 +fixedRec.width/2 &&
    fixedRec.x-movingRec.x<movingRec.width/2 +fixedRec.width/2  &&
    movingRec.y-fixedRec.y<movingRec.height/2+fixedRec.height/2 &&
    fixedRec.y-movingRec.y<fixedRec.height/2+movingRec.height/2){
    fixedRec.shapeColor="red";
    movingRec.shapeColor="red";
  }
  else{
    fixedRec.shapeColor="green";
    movingRec.shapeColor="green";
  }

  console.log(movingRec.x-fixedRec.x);
  drawSprites();
}