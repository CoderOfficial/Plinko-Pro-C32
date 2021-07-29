const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var plinkos =[]
var particles =[]
var divisions =[]
var divisionHeight =175;
var width = 10
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


ground = new Ground(240,795,500,15)

  for(var k = 0; k<=width; k = k + 80){
divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight))
  }

for(var j = 40; j<=width; j=j+50){
plinkos.push(new Plinko(j,75))
}
for(var j = 40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,175))
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))
    }
    for(var j = 40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,375))
      }
      for(var j = 40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,475))
        }
        for(var j = 40; j<=width; j=j+50){
          plinkos.push(new Plinko(j,575))
          }
          
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  if(frameCount%10===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var a = 0; a < particles.length; a++){
    particles[a].display()
  }
for(var k = 0; k < divisions.length; k++){
divisions[k].display()
}
  drawSprites();
}