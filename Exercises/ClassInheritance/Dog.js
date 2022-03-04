const Animal = require('./Animal.js');

class Dog extends Animal {
  constructor(favoriteToy) {
    super('Dog', 15, 30, 1.3);
    this.favoriteToy = favoriteToy;
    this.showFavoriteToy();
  }
  showFavoriteToy() {
    console.log(`
      And, by the way, my favorite toy is ${this.favoriteToy}!
      I really enjoy playing with it!

      --------------------------------------------------------
    `)
    return true
  }
}

module.exports = Dog;