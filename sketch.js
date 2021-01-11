const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dot1, dot2, dot3, dot4, dot5, dot6, dot7, dot8, dot9;
var dot11,dot12,dot13,dot14,dot15,dot16,dot17,dot18,dot19,dot20, dot21;
var particles = [];
var plinkoarr = [];
var divisions = [];
var divisionHeight=300;
var ground, groundSprite;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(240, 799, 480, 10,{isStatic : true});
  World.add(world, ground);

  /*var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
      width: 480,
      height: 800,
      wireframes: false
    }
  });
    
  
  Render.run(render);*/

  Engine.run(world);
}

function draw() {
  background(8, 23, 38);

  for(var j = 40; j <= innerWidth; j =j + 50){
    plinkoarr.push(new Plinko(j,75));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkoarr.push(new Plinko(k, 175));
  }

  for(var j = 40; j <= innerWidth; j =j + 50){
    plinkoarr.push(new Plinko(j,175));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkoarr.push(new Plinko(k, 275));
  }

  for(var k = 0; k <= innerWidth; k = k + 80){
    divisions.push(new DivisionClass(k, height-divisionHeight/2, 10, divisionHeight));
  }

  groundSprite = createSprite(ground.position.x, ground.position.y, 480, 10);

  divisions[0].showDivisions();
  divisions[1].showDivisions();
  divisions[2].showDivisions();
  divisions[3].showDivisions();
  divisions[4].showDivisions();
  divisions[5].showDivisions();
  divisions[6].showDivisions();

  plinkoarr[0].showPlinko();
  plinkoarr[1].showPlinko();
  plinkoarr[2].showPlinko();
  plinkoarr[3].showPlinko();
  plinkoarr[4].showPlinko();
  plinkoarr[5].showPlinko();
  plinkoarr[6].showPlinko();
  plinkoarr[7].showPlinko();
  plinkoarr[8].showPlinko();
  plinkoarr[9].showPlinko();
  plinkoarr[10].showPlinko();
  plinkoarr[11].showPlinko();
  plinkoarr[12].showPlinko();
  plinkoarr[13].showPlinko();
  //plinkoarr[14].showPlinko();
  /*plinkoarr[15].showPlinko();
  plinkoarr[16].showPlinko();
  plinkoarr[17].showPlinko();
  plinkoarr[18].showPlinko();*/

  //console.log(plinkoarr[14])

  drawSprites();
}