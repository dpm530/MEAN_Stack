// Part 1
class Ninja {

   constructor(name){
      this.name=name;
      this.health=100;
      this.speed=3;
      this.strength=3;
   }

   sayName(){
      console.log(`Ninja's name: ${this.name}`);
   }

   showstats(){
      console.log(`Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health} `);
   }

   drinkSake(){
      this.health+=10;
      return this;

   }

}

let new_ninja = new Ninja("Kenshin")
new_ninja.sayName()
new_ninja.showstats()
new_ninja.drinkSake()
new_ninja.showstats()

// Part 2

class Sensei extends Ninja {

   constructor(name){
      super(name);
      this.health=200;
      this.speed=10;
      this.strength=10;
      this.wisdom=10;

   }

   speakWisdom(){
      super.drinkSake();
      console.log("Wisdom")
   }

   showStats(){
      console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
   }

}

// example output
let super_sensei = new Sensei("Master Splinter");
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
