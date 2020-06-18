const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload(){
backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    
    pig1 = new Pig(700,200);
    pig2 = new Pig(800,200)
    pig3 = new Pig(900,200);

    bird1 = new Bird(200,100);
    bird2 = new Bird(300,100);
    bird3 = new Bird(400,100)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    bird1.display();
    bird2.display();
    bird3.display();
}