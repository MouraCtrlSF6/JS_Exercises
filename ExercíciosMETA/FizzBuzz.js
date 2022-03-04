class FizzBuzz{
    constructor(number){
        this.number = number;
    }
    isFizz(number){
        return this.number%3 === 0 && this.number%5 !== 0;
    }
    isBuzz(){
        return this.number%3 !== 0 && this.number%5 === 0;
    }
    isFizzBuzz(){
        return this.number%3 === 0 && this.number%5 === 0;
    }
}   
const myFizzBuzz = () =>{
    let myArray = [];
    for (let thisNumber = 1; thisNumber <= 100; thisNumber++){
    let myNumber = new FizzBuzz(thisNumber);
    switch(true){
        case myNumber.isFizz():
            myArray[thisNumber - 1] = 'Fizz';
            break
        case myNumber.isBuzz():
            myArray[thisNumber - 1] = 'Buzz';
            break;
        case myNumber.isFizzBuzz():
            myArray[thisNumber - 1] = 'FizzBuzz';
            break;
        default:
            myArray[thisNumber - 1] = thisNumber;
        }   
    }
    return myArray;
}
console.log(myFizzBuzz());
