const Engine = Matter.Engine;
const World= Matter.World;
const  Events = Matter.Events;
const Bodies = Matter.Bodies;

var drops = [];
var boy, lightning;
var maxDrops = 100;

function setup(){
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    boy = new Umbrella(400, 680);
    lightning = new Lightning(random(200, 600), 50);

    Rain();
}

function Rain()
{
    for(var i=0; i<maxDrops; i++)
    {
        if(frameCount%20===0)
        {
            drops.push(new Raindrops(random(0, 800), random(0, 800), 3));
        }
    }
}
function draw(){
    background("black");
    Engine.update(engine);
    boy.scale = 0.1;


    boy.display();

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
    }

    for(var i=0; i<maxDrops; i++){
        if ( drops[i].body.position.y > 800)
        {
            drops[i].rePosition();
        }
    }

    if(frameCount%75===0){
        lightning.display();
    }
  
    //drawSprites();
}   
