
var bullet,wall,thickness;
var speed,weight;  


function setup() {
  createCanvas(1600,400);
  
  bullet = createSprite(50, 200, 70, 30); 
  bullet.shapeColor ="white";
 

  wall =createSprite(1200,200,thickness,height/2);
  wall.shapeColor = 80,80,80;
  

  speed = random(223,321);
  weight =random(30,52);
  thickness =random(22,83);
}

function draw() {
  background("black"); 
  
  bullet.velocityX =speed; 
 
 
  
  if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2) {
  bullet.velocityX = bullet.velocityX * (-1);
  wall.velocityX = wall.velocityX * (-1);
  }
  

  if (bullet.y - wall.y < wall.height/2 + bullet.height/2
  && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
  bullet.velocityY = bullet.velocityY * (-1);
  wall.velocityY = wall.velocityY * (-1);
  }

 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX =0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage >=10){
    bullet.shapeColor ="red";
  }
  else if(damage <10){
    bullet.shapeColor ="green";
  }

  }
 
  console.log(damage);

  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge =lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;



}