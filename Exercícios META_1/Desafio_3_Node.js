let numbersUntil = () => {
    let myNumbers = [];
    for (let i = 2; i<num+1; i++){
        myNumbers[i-2] = i; 
    }
    return myNumbers
}

let myPrimeList = () => {
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

const num = parseInt(process.argv.slice(2));
try{
    if(myPrimeList(num).length < 1) throw (e);
    console.clear();
    console.log(`Os números primos até ${num} são: ${myPrimeList(num).toString()}\n`);
} catch(e){
    console.clear();
    console.log(`Não há fatoriais até ${num}\n`);
}