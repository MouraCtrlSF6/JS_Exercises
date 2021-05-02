const ClassByFunction = function(name, age, city){
    this.myName = name;
    this.myAge = age;
    this.myCity = city;
    
    this.myData = function(){
        return (`Hello! My name is ${this.myName}, I'm ${this.myAge} years old, and I live in ${this.myCity}.`);
    }
}
const Me = new ClassByFunction('Lucas', 19, 'Canoas');
console.clear();
console.log(Me.myData());
console.log('Finished the code by FUNCTION!\n');

class ClassByClass{
    constructor (name, age, city){
        this.myName = name;
        this.myAge = age;
        this.myCity = city;
    }
    myData(){
        return `Hello! My name is ${this.myName}, I'm ${this.myAge} years old, and I live in ${this.myCity}.`
    }
}
const ClassMe = new ClassByClass('Lucas', 19, 'Canoas');
console.log(ClassMe.myData());
console.log('Finished the code by CLASS!');