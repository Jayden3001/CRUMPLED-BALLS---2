
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var paper,ground
var box1,box2,box3


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Dustbin(500,600,20,200);
	box2 = new Dustbin(390,690,200,20);
	box3 = new Dustbin(300,600,20,200);

	paper = new Paper(100,400,50)
	ground = new Dustbin(400,700,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  paper.display()
  
 
  drawSprites();
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-25})
	 }
   }
   