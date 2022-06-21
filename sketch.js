var garden,rabbit;
var gardenImg,rabbitImg;
var aplle;
var orange
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
  
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  
  
  
  function creatApples(){
    apple = creatSprite(random(50,350),40,10,10)
    apple.addImage("apple.png")
    apple.sacle = 0.07
    apple.velocityY = 3
    apple.lefetime = 150
    
    }
  
  
  function Orange(){
    orange = creatSprite(random(50,350),40,10,10)
    orange.addImage("orangeLeaf.png")
    orange.sacle = 0.08
    orange.velocityY = 3
    orange.lefetime = 150

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  }