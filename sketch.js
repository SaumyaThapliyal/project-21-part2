var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(255,255,255);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,30,10);
  bullet.shapeColor = color(0,255,255)
  bullet.velocityX = speed;
}



function draw() {
  background(0,0,0);  

  if(wall.x - bullet.x<bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
  
    var deform = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (deform>12.43){
      bullet.shapeColor = color(255,0,0);
    }

     if (deform<12.43){
       bullet.shapeColor = color(0,255,0);
     }
    }
  
  drawSprites();
}