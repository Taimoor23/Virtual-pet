class Food {
    constructor(){
          
        this.image = loadImage("Milk.png");
        this.FoodStock=0;
        this.LastFed;
    }

    display(){
        var x = 80, y= 100;

        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);

        if(this.FoodStock !== 0){
            for(var i = 0; i<this.FoodStock; i++){
                if(1%10 === 0){
                    x=80;
                    y=y+50;
                }
                image(this.image, x, y, 50, 50);
                x=x+30;
            }
        }  
    }

    getFoodStock(){
   return this.FoodStock
    }

    updateFoodStock(FoodStock){
   this.FoodStock=FoodStock
    }
    getFeedTime(lastFed){
        this.lastFed=lastFed
    }
    deductFood(){
        if(this.FoodStock>0){
            this.FoodStock=this.FoodStock-1
        }
    }
}