var Dog;
var HappyDog;
var Database;
var FoodS,FoodStock;

function preload(){
Dog=loadImage("Dog.png");
HappyDog=loadImage("happydog.png");


}
function setup() {
  createCanvas(500,500);
  doggy =createSprite(250, 250, 50, 50);
  doggy.addImage("Dog1",Dog);
  doggy.addImage("happy",HappyDog)
  doggy.scale=0.5;

  Database=firebase.database();

  FoodStock=Database.ref('Food');
  FoodStock.on("value",readStock);

}

function draw() {
  background(46, 139, 87);  
  
  if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    doggy.changeImage("happy");
    


  }
  if(keyWentUp(UP_ARROW)){
    doggy.changeImage("Dog1");


  }


  drawSprites();
  textSize(20);
  fill("red");
  stroke("blue");
  text("food supply:"+FoodS,100,200);

}


function readStock(data){
FoodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }


  Database.ref('/').update({
    Food:x
  })


}