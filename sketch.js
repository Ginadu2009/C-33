const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world, engine;
var fundo
var bola, bolaImg;
var cesta;

function preload(){
  fundo = loadImage("Quadra de Basquete.jpg")
  bolaImg = loadImage("bola-de-basquete.png")
}

function setup() {
  createCanvas(800,600);
  
  engine = Engine.create();
	world = engine.world;

  cesta=new dustbin(250,170)

  bola=Bodies.circle(500,400,20)
	World.add(world,bola)

}

function draw() {
  background(fundo);  

  image(bolaImg,bola.position.x,bola.position.y,40,40)

  cesta.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
		console.log("tecla")		
        Matter.Body.applyForce(bola,bola.position,{x:-100,y:-100});
    }
}