class Animal {
  constructor (animalClass, lifeExpect, weight, height) {
    this.animalClass = animalClass;
    this.lifeExpect = lifeExpect;
    this.weight = weight;
    this.height = height;
    this.showSentence();
  }

  showSentence() {
    console.log(`
      Hello, there! I'm a ${this.animalClass}, how lives about ${this.lifeExpect} years, 
      weights ${this.weight} and it's about ${this.height} tall.
      Pleased to meet you!!!
    `);
    return true;
  }
}

module.exports = Animal;