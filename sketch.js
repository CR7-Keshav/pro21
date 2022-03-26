var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(800,670,width,20)
	leftwall=new Ground(1100,600,20,120)
	rightwall=new Ground(1350,600,20,120)
	var Option={
		isStatic:false,restitution:0.3,friction:0,density:1.2
	}


	ball=Bodies.circle(260,100,20,Option)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftwall.show()
  rightwall.show()
  drawSprites();
  ellipseMode(CENTER)
  fill ("blue")
  ellipse (ball.position.x,ball.position.y,40,40)
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


