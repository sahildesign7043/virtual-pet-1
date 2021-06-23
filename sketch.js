
var dog,happyDog;
var database 
var foodS,foodStock;

function preload()
{
	
  dog=loadImage("doglmg.png");
  happyDog=loadImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  happyDog=createSprite(300,300,10,10);
  happyDog.addImage(happyDogImg);


  database = firebase.database();
  foodRef = database.ref("Food");
  foodRef.on("value",read,console.log("error"));


}


function draw() {  
background("46, 139, 87");


if(keyWentUp(UP_ARROW)){
    
  dog.addImage(dogHappy);

}
  drawSprites();
  
  textSize(32);
  fill("blue");
  text("Bones in the Stock: "+foodStock,50,300);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  }
    
  )
}



