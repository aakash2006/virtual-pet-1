//Create variables here
var dog,happydog,dogImg,happyDogImg,foodStock,foodS,database;
function preload()
{
  //load images here
  dogImg = loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,240,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() 
{  
background(46,139,87);
if(keyWentDown(UP_ARROW))
{
 writeStock(foodS);
 dog.addImage(happyDogImg);
}

drawSprites();
fill('white');
text("food remaining: "+foodS,170,150);
textSize(20);
fill("white");
text("press up arrow to feed drago!",170,120);
}






function readStock(data)
{
 foodS = data.val();
}

function writeStock(x)
{
  console.log("first"+x);
  if(x<=0)
  {
   x = 0
   console.log("before else"+x);
  }
  else
  {
    x = x-1
    console.log("after else"+x);
  }
  database.ref('/').update({
    Food:x
  })
 console.log(x);
 
 
}


