var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var score = 0;
var particle;
var turn = 0;

var gameState = "start";

var divisionHeight=300;

function setup() {
  createCanvas(800, 735);
  engine = Engine.create();
  world = engine.world;
  ground = new Base(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }




   if(particle != null){
    particle.display();

    if(particle.body.position.x > 0){

     if(particle.body.position.x < 200){

      if(particle.body.position.y > 300){

        score = score + 500;

        if(turn >= 5 ){
          
          gameState = "end";
      
          }
        }
      }
    }
  }

  if(particle != null){
    particle.display();

    if(particle.body.position.x > 200){

     if(particle.body.position.x < 400){

      if(particle.body.position.y > 300){
          
        score = score + 200;

          if(turn >= 5 ){

            gameState = "end";

        }
      }
    }
  }
}

  if(particle != null){
    particle.display();

    if(particle.body.position.x > 400){

     if(particle.body.position.x < 600){

      if(particle.body.position.y > 300) {
          
        score = score + 100;

        if(turn >= 5 ){
          gameState = "end";
        }
      }
    }
  }
}

  if(particle != null){
    particle.display();

    if(particle.body.position.x > 600){

     if(particle.body.position.x < 800){
        
        score = score + 300;

      if(turn >= 5 ){
        gameState = "end";
      
        
       }
      }
    }
  }


   if(gameState === "end"){
     fill("red");
     text("Game Over",300,300);
     particle = null;
   }

   fill("yellow");
   text("Score :" + score , 300,420);
   text("300",750,720);
   text("500",30,720);
   text("300",670,720);
   text("200",580,720);
   text("500",100,720);
   text("200",190,720);
   text("200",260,720);
   text("200",500,720);
   text("100",350,720);
   text("100",410,720);

   push();
   stroke("yellow");
   strokeWeight(5);
   line(0,400,800,400);
   pop();

}



function mousePressed(){
  if(gameState !== "end"){
    turn++;
   particle =  new Particle(mouseX, 10,10,10);
  }
}