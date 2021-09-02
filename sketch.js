const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,590,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block(480,275,30,40);
  block2 = new Block(450,275,30,40);
  block3 = new Block(420,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(360,275,30,40);
  block6 = new Block(330,275,30,40);
  block7 = new Block(300,275,30,40);
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);

  b1 = new Block(900,275,30,40);
  b2 = new Block(900,315,30,40);
  b3 = new Block(870,315,30,40);
  b4 = new Block(930,315,30,40);
  b5 = new Block(900,355,30,40);
  b6 = new Block(870,355,30,40);
  b7 = new Block(840,355,30,40);
  b8 = new Block(930,355,30,40);
  b9 = new Block(960,355,30,40);
  


}

function draw() {


  background("lightgrey");


  ground.display();

  ground2.display();

  ground3.display();

  polygon.display();

  launcher.display();

  fill(18, 224, 224);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();


  fill(255, 0, 106);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(51, 255, 0);
  block13.display();
  block14.display();
  block15.display();

  fill(255, 153, 0);
  block16.display(); 


  fill(253, 253, 253);
  b1.display();

  fill(238, 255, 0);
  b2.display();
  b3.display();
  b4.display();


  fill(95, 119, 255);
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  


  textSize(40);
  fill("black");
  stroke("white");
  strokeWeight(6);
  text("Press Space Key To Get Another Chance ",80,500);



  
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode === 32)  {
    Matter.Body.setPosition(polygon.body,{x:235, y:420})
    launcher.attach(polygon.body);

  }

}


