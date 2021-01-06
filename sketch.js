const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17,block18,block19,block120,block21,block22,block23,block24,block25;

var polygon,polygonImage;
var base1,base2;

function  preload()
{
polygonImage=loadImage("polygon.png");
}
function setup() {
createCanvas(1000,400);

engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);

   base1 = new Base(500,300,100,30);
   base2= new Base(750,270,100,30);

    








}
function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

        base1.display();
        base2.display();
          
          drawSprites();
         


}




















