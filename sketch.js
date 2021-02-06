var dogImg, happyDog, database, foodS, foodStoke, readStock, lastFed;
var dog

function preload()
{
  
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000, 400);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  food1 =new Food();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  feed=createButton("Feed the dog NOW!!");
  feed.position(200,90);
  feed.mousePressed(feedDog);
  addFood=createButton("money 4 food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() { 
  background(46, 139, 87);
  food1.display();

  fedTime= database.ref('feedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  })
  
   fill(255,255,254);
   textSize(15);
   if (lastFed>=12){
     text("Last fed:"+lastFed%12+ "PM", 350,30);
     }
     else if(lastFed==0){
       text("last fed : 12AM",350,30);
     }
     else{
       text("last feed : "+ lastFed + "AM",350,30);
    
     }
  drawSprites();
}
function readStock(data){
  foodS = data.val();
  food1.updateFoodStock(foodS);
}
function feedDog(){
  dog.addImage(happyDog);
  if(food1.getFoodStock()<=0){
  food1.updateFoodStock(food1.getFoodStock()*0);
}
else{
  food1.updateFoodStock(food1.getFoodStock()-1);
}
  database.ref('/').update({
    Food:food1.getFoodStock(),
    feedTime:hour()
  })
}
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS  
  })
}