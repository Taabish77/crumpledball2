
var boxL, boxR, box3, ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	   engine = Engine.create();
	   world = engine.world;
	  
	   ball=createSprite(200,450,40);
	   //Matter.Bodies.circle(x, y, 20)
	    ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	   World.add(world, ballBody); 

	  boxL=createSprite(width/2-100,610,20,100); 
		boxL.shapeColor=("red");
		//boxL=Bodies.rectangle(2-)

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); World.add(world, boxLeftBody);
	
	boxR=createSprite(80,80,20,100); 
	boxR.shapeColor=("red");


	box3=createSprite(280,80,20,100); 
	box3.shapeColor=("red");

	
		groundSprite=createSprite(width/2, height-35, width,10); 
	 
	 	groundSprite.shapeColor=color(255) 
	 	engine = Engine.create();
	 
	 	ground = Bodies.rectangle(width/2, 600, width, 10 ,{isStatic:true});
	  	World.add(world, ground); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,1,100);
  drawSprites();
 
}
function keyPressed(){
	if (keycode==UP_ARROW){
	
	
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	}
	}


