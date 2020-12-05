const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var k = 0; k <= width; k = k+ 80){
    divisions.push(new Division(k, height = divisionHeight/2, 10, divisionHeight));
   }
  ground = new Ground(240,750,900,20);

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  
  ground.display();
  
 
}