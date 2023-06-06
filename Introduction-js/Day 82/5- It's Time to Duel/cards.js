
class Card {
  constructor(name, cost){
    this.name = name;
    this.cost = cost;
  }
} 


class UnitCards extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost); 
    this.power = power;
    this.resilience = resilience;
  }

  // attack ?
  attack(target){
    target.resilience -=target.power;
    this.power += 5;

  }
}

class EffectCards extends Card {
  constructor(name, cost, magnitude,stat) {
    super(name, cost);
    this.magnitude = magnitude;
    this.stat = stat;
  }

  // playing the game on the 'Unit Cards'; 
  play(target) {
    if (this.stat === "resilience") {
      target.resilience += this.magnitude;
    } else if (this.stat === "power") {
      target.power += this.magnitude;
    }
  }

}

// The scenario : 
//Make an instance of "Red Belt Ninja"
const redBelt = new UnitCards("Red Belt", 3, 3, 4);
console.log("Round 1 , redbelt before fight ==>", redBelt);

//Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const hardAlgo = new EffectCards("Hard Algorithim", 2, +3, "resilience");
hardAlgo.play(redBelt);
console.log("Round 1 , redbelt after fight ==>" ,redBelt);

// Make an instance "Black Belt Ninja"
const blackBelt = new UnitCards("black Belt", 4, 5, 4);
console.log("Round 2, black belt before fight ", blackBelt)


// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const unhandledPromiseRejection = new EffectCards("Unhandled Promise Rejection",1,-2,"resilience");
unhandledPromiseRejection.play(redBelt);
console.log("Round 2 , Redbelt after fight ", redBelt);


// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const pairProgramming = new EffectCards("Pair Programming", 3, +2, "power");
pairProgramming.play(redBelt);
console.log("Round 3 , redbelt on round 3 after fight  ",redBelt);

// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"

// attack ? 

console.log("Red belt attacking black belt");
redBelt.attack(blackBelt);
console.log(blackBelt);
console.log(redBelt); // this wins