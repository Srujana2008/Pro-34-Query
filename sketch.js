const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var world;
var engine;

var rope;

var START = 0;
var PLAY = 1;
gameState = 0;

function preload(){
  uwImg = loadImage("assets/underWater.jpg");
  playButtonImg = loadImage("assets/play.png");
  fishingRodImg = loadImage("assets/fishingrod.png");
  hookImg = loadImage("assets/hook.PNG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  playButton = createSprite(width/2, height/2, 10, 10);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.15;

  fishingRod = createSprite(width/2, 140, 10, 10);
  fishingRod.addImage(fishingRodImg);
  fishingRod.scale = 0.2;
  fishingRod.visible = false;

  rope = new Rope(20,{x:width/2-60,y:15});

  hook = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,hook);

  con = new Link(rope.body, hook);

  

}


function draw() 
{
  background("white");
  
  Engine.update(engine);

  push();
  imageMode(CENTER);
  if(hook!=null){
    image(hookImg,hook.position.x,hook.position.y,70,70);
  }
  pop();

  if(gameState === START){
    stroke("white");
    textSize(30);
    fill("black");
    text("TITLE", width/2-50, 100);
    if(mousePressedOver(playButton)){
      gameState = PLAY;
    }
  }

  if(gameState === PLAY){
    playButton.visible = false;
    image(uwImg, 0, 0, width, height);
    fishingRod.visible = true;
    rope.show();
  }

 
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
