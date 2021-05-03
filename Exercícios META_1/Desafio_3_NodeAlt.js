let numbersUntil = (num) => {
    let myNumbers = [];
    for (let i = 2; i<num+1; i++){
        myNumbers[i-2] = i; 
    }
    return myNumbers
}

let myPrimeList = (num) => {
    let myPrimes = numbersUntil(num);
    let myPrimesOnly = [];
    let i = 0;
    for (let divisor of myPrimes){
        if (divisor !== 'Out'){
            for (let index = myPrimes.indexOf(divisor) + 1; index < myPrimes.length; index++){
                if (myPrimes[index]%divisor === 0 && myPrimes[index] !== 'Out') myPrimes[index] = 'Out'; 
            }
        }      
    }
    for (let elements of myPrimes){
        if (elements !== 'Out'){
            myPrimesOnly[i] = elements;
            i++;
        }  
    }  return myPrimesOnly;
}

console.clear();
console.log('Digite um número e todos os primos até ele serão exibidos:');
process.stdin.on('readable', ()=>{
    const num = parseInt(process.stdin.read());
    switch(true){
        case myPrimeList(num).length < 1:
            console.log(`Não há números primos positivos até ${num}.\n`);
            break;
        default:
            console.log(`Os números primos até ${num} são:\n${myPrimeList(num).toString()}\n`);
    }
});
