var r1,r2,r3,r4,ball,edges,bounceSound;

function preload(){
  bounceSound = loadSound("music.mp3");

}


function setup(){
  createCanvas(600,600);
  r1 = createSprite(80,575,160,20);
  r1.shapeColor = "green";

  r2 = createSprite(250,575,160,20);
  r2.shapeColor = "orange";
  


  r3 = createSprite(430,575,160,20);
  r3.shapeColor = "blue";
  
  r4 = createSprite(600,575,160,20);
  r4.shapeColor = "purple";

  ball = createSprite(30,10,25,25);
  ball.shapeColor = "white";
  ball.x = Math.round(random(30,575));
  ball.velocityY = 3;
  ball.velocityX = 2;

  

}

function draw(){
  background("grey");
  if(ball.isTouching(r1)){
    ball.shapeColor = "green"
    bounceSound.play();
  }
  if(ball.isTouching(r2)){
    ball.shapeColor = "orange"
    ball.velocityX = 0;
    ball.velocityY = 0;
  }
  if(ball.isTouching(r3)){
    ball.shapeColor = "blue"
    bounceSound.play();
  }
  if(ball.isTouching(r4)){
    ball.shapeColor = "purple";
    ball.velocityY = 0;
    ball.velocityX = 0;
  }

 ball.bounceOff(r1);
 ball.bounceOff(r2);
 ball.bounceOff(r3);
 ball.bounceOff(r4);
 edges = createEdgeSprites();
 ball.bounceOff(edges);
 



  drawSprites();

}
