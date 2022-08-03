const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
 var options = {
   isStatic: true 
 };

 playerBase = Bodies.rectangle(200,350,180,150, options);

 player = Bodies.rectangle(250,playerBase.position.y-160,50,180, options);
 world.add(worl,player)
  //criar corpo do jogador



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
 Image(playerimage,playerposition.x,position.y,50,180)

  //exibir a imagem da base do jogador usando a função image()
Image(baseimage,playerBase.position.x,playerBase.position.y,180,150)

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
