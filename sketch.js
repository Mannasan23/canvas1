const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var brush;
var gameState = "hold";

function setup() {
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
}

function draw() {
    background(0);
    Engine.update(engine);

    if(gameState === "hold" && mousePressed){
        stroke = "red";
    }
}
function mousePressed(){
    
}
