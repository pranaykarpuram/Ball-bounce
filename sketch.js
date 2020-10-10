const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,body;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ballOption = {
  restitution: 0.5
  }
  ball = Bodies.circle(200,200,40,ballOption);
  World.add(world, ball);
  var option ={
    isStatic: true
  }
  ground = Bodies.rectangle(200,400,400,20, option);
  World.add(world,ground);
 
}

function draw() {
  background(0); 
  ellipse(ball.position.x,ball.position.y, 80,80);
  rectMode(CENTER);    
  rect(ground.position.x,ground.position.y,400,20);
  Engine.update(engine);
}