//Create variables here
var dog,happydog,dogImg,happyDogImg,foodStock,foodS,database;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
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
drawSprites();
fill('white');
text("food remaining: "+foodS,170,150);
textSize(20);
fill("white");
text("press up arrow to feed drago!",170,120);

if(keyWentDown(UP_ARROW))
{
 writeStock(foodS);
 foodS = foodS-1;
 dog.addImage(happyDogImg);
}
 


}
function readStock(data)
{
 foodS = data.val();
}
function writeStock(x)
{
 database.ref('/').update({
   Food:x
 })

 
}


