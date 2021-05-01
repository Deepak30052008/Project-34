const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world ,hero,handle,enemy,ground,heroimage,sling,box1,box2,box3,box4,box5,box6,box7,box8,box9
function preload(){
  bgimage=loadImage("sky.jpg")
}
function setup(){
  var canvas = createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  hero=new Sonic(150,300,110,160)
  sling=new Rope(hero.body,{x:150,y:300})
  ground=new Ground(400,590,900,10)
  handle=new Ground(475,415,400,10)
  box1=new Box(300,400,50,50)
  box2=new Box(350,400,50,50)
  box3=new Box(400,400,50,50)
  box4=new Box(450,400,50,50)
  box5=new Box(500,400,50,50)
  box6=new Box(350,350,50,50)
  box7=new Box(400,350,50,50)
  box8=new Box(450,350,50,50)
  box9=new Box(400,300,50,50)
  enemy=new Enemy(650,450,200,200)
}
function draw(){
 Engine.update(engine);
 background("skyblue");
 fill("black")
   text("x : "+mouseX,10,10)
 text("y : "+mouseY,10,30)
 hero.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 enemy.display();
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}
function keyPressed(){
  if(keyCode===32){
  sling.attach(hero.body);
  Matter.Body.setPosition(hero.body,{x:150,y:300})
  Matter.Body.setPosition(box1.body, {x: 300 , y: 400});
  Matter.Body.setPosition(box2.body, {x: 350 , y: 400});
  Matter.Body.setPosition(box3.body, {x: 400 , y: 400});
  Matter.Body.setPosition(box4.body, {x: 450 , y: 400});
  Matter.Body.setPosition(box5.body, {x: 500 , y: 400});
  Matter.Body.setPosition(box6.body, {x: 350 , y: 350});
  Matter.Body.setPosition(box7.body, {x: 400 , y: 350});
  Matter.Body.setPosition(box8.body, {x: 450 , y: 350});
  Matter.Body.setPosition(box9.body, {x: 400 , y: 300});
 }
}