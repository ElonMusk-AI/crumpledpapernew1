const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper0, groundS;
var rect1, rect2, rect3;



function setup() {
	createCanvas(1530, 600);

	engine = Engine.create();
	world = engine.world;

	paper0 = new paper(200,540,80);

	groundS = new Ground(765,height-10,width,10);

	rect1 = new Rect(980,580,200,20)
	rect2 = new Rect(880,485,20,200); 
	rect3 = new Rect(1080,485,20,200);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	
	paper0.display();
	rect1.display();
	rect2.display();
	rect3.display();
	groundS.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){	
		Matter.Body.applyForce(paper0.body, paper0.body.position, {x:250,y:-250});
	}
}



