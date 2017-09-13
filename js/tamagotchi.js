export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.energy = 10;
    this.happiness = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

 //  setHunger() {
 //    setInterval(() => {
 //      this.energy--;
 //    }, 2000);
 //  }
 //
 //  setHunger() {
 //    setInterval(() => {
 //      this.happiness--;
 //    }, 3000);
 //  }
 //
  feed() {
   this.foodLevel += 10;
 }
 //
 //  play() {
 //   this.happiness = 10;
 // }
 //
 // feed() {
 //   this.foodLevel = 10;
 // }
}
