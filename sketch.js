
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000, 130, 30);
	mango3 = new mango(950, 200, 30);
	mango4 = new mango(1045, 240, 30);
	mango5 = new mango(1200, 140, 30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stone1 = new Stone(235, 420,30);
	sling1 = new Sling(stone1.body, {x:235, y:420});
	Engine.run(engine);

}

function draw() {
  background(230);  
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  //sling1.display();
  groundObject.display();

  detectollision(stone1, mango1);
  detectollision(stone1, mango2);
  detectollision(stone1, mango3);
  detectollision(stone1, mango4);
  detectollision(stone1, mango5);
 
  

}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
	 sling1.fly();   
	}
	function keyPressed(){
	if (keyCode===32){
	Matter.Body.setPosition(stone1.body,{x:235,y:420})
	launcherObject.attach(stone1.body)
}

	}

	function detectollision(lstone1,lmango){
		mangoBodyPosition=lmango.body.position
		stone1BodyPosition=lstone1.body.position

		var distance=dist(stone1BodyPosition.x, stone1BodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y,)
		if(distance<=lmango.r+stone1.r){
			Matter.Body.setStatic(lmango.body,false)
		}
	}
