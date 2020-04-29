var car, wall, speed, weight, Zone, damage, deformation;

function setup() {
  gameState = "testing";
  weight = Math.round(random(400,1500));
  console.log("Weight = " + weight);
  createCanvas(1200,400);
  car = createSprite(100, 175, weight/20, weight/20);
  car.shapeColor = "white";
  wall = createSprite(1100,175, 60, 350);
  wall.shapeColor = "blue";
  speed = Math.round(random(30,95));
  console.log("Speed = " + speed);

  Zone = createSprite(600,375, 1200, 50);
  
  deformation = Math.round((0.5 * weight * speed * speed)/22500);

  if(deformation > 180){
    Zone.shapeColor = "red"; 
    damage = "HIGH";
  }
  else if(deformation < 80){
    Zone.shapeColor = "green";
    damage = "LOW";
  }
  else{
    Zone.shapeColor = "yellow";
    damage = "MEDIUM";
  }
  console.log("damage amplitude = " + damage + " (" + deformation + ")");
}

function draw() {
  background(0);
  car.velocityX = speed/5;
  car.collide(wall);
  if (car.collide(wall)){
    car.shapeColor = color;
  }
  drawSprites();
}