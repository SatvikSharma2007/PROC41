const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunder1,thunder2,thunder3,thunder4;
var walking5;
var engine, world;
var drops=[];

function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
    walking5=loadImage("walking_5.png");

    
}

function setup(){
    createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;
    for(var i=0;i<100;i++){
        drops.push(new Drop());
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i=0;i<drops.length;i++){
       drops[i].display();
       }
       var rand=Math.round(random(1,4));
       switch(rand){
           case 1:image(thunder1,random(0,600),random(200,400),60,60);
           break ;
           case 2:image(thunder2,random(0,600),random(200,400),60,60);
           break ;
           case 3:image(thunder3,random(0,600),random(200,400),60,60);
           break ;
           case 4:image(thunder4,random(0,600),random(200,400),60,60);
           break ;
           default:break;

       }

}   

