const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let world;
let engine;

var ball;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(400, 200, 30);
}

function draw() { 
  background(0,203,255);  
  Engine.update(engine);
  ball.reveal();
  drawSprites();
}