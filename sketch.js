
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobOBject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	roof = new Roof(20, 75, 500, 30);

	bobObject1 =new Bob(230, 275, 50,50);
	bobObject2 =new Bob(340, 275, 50,50);
	bobObject3 =new Bob(400, 275, 50,50);
	bobObject4 =new Bob(460, 275, 50,50);
	bobObject5 =new Bob(520, 275, 50,50);

    rope1 = new Rope(bobObject1, roof);
	  rope2 = new Rope(bobObject2, roof);
    rope3 = new Rope(bobObject3, roof);
    rope4 = new Rope(bobObject4, roof);
  	rope5 = new Rope(bobObject5, roof);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



