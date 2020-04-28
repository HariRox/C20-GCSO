var car, wall, speed, weight, greenZone, yellowZone, redZone, damage;

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

  greenZone = createSprite(600,375, 1200, 50);
  greenZone.shapeColor = "green";
  greenZone.visible = false;
  yellowZone = createSprite(600,375, 1200, 50);
  yellowZone.shapeColor = "yellow";
  yellowZone.visible = false;
  redZone = createSprite(600,375, 1200, 50);
  redZone.shapeColor = "red";
  redZone.visible = false;

  if((0.5 * weight * speed * speed)/22500 > 180){
    redZone.visible = true;
    damage = "HIGH";
  }
  else if((0.5 * weight * speed * speed)/22500 < 80){
    greenZone.visible = true;
    damage = "LOW";
  }
  else{
    yellowZone.visible = true;
    damage = "MEDIUM";
  }
  console.log("damage amplitude = " + damage)
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