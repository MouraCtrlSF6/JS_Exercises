const Animal = require('./Animal.js')

class Human extends Animal {
  constructor(name){
    super('Human', 80, 80, 1.75);
    this.name = name;
    this.showName();
  }
  showName() {
    console.log(`
      Ooh, and I forgot! As i'm a human, surely i have a name. 
      It's ${this.name}! Nice to meet you.

      --------------------------------------------------------
    `);
    return true;
  }
}

module.exports = Human;