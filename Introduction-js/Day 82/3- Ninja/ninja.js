/**
 * Ninja class, initializes health, speed , strength, and adds name.
 *
 */

class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 50;
    this.speed = 3;
    this.strength = 3;
  }

  sayName() {
    console.log(`the ninjas name is ${this.name}`);
  }

  showStats() {
    console.log("Name: " + "    " + this.name);
    console.log("health:" + "   " + this.health);
    console.log("Speed" + "    " + this.speed);
    console.log("Strength" + "    " + this.strength);
  }

  drinkSake() {
    this.health += 10;
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.drinkSake();
ninja1.drinkSake();

ninja1.sayName();
ninja1.showStats();
