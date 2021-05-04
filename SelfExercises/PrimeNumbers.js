function primeList(myPrimes){
    let i = myPrimes[(myPrimes.length) - 1];
    while(true){
        i++;
        for (let currentPrime of myPrimes){
            if(i%currentPrime > parseInt(i/currentPrime)){
                myPrimes.push(i);
                return myPrimes;
            }
            if(i%currentPrime === 0){
                break;
            }
        }
    }
}

function isPrime(num, myPrimes){
    let myLastPrime = myPrimes[(myPrimes.length) - 1];
    for (let currentPrime of myPrimes){
        if (num%currentPrime > parseInt(num/currentPrime)){
            return true;
        }
        if (num%currentPrime === 0 && num !== currentPrime){
            return false;
        }
        if (currentPrime >= myLastPrime){
            myPrimes = primeList(myPrimes);
            myLastPrime = myPrimes[(myPrimes.length) - 1];
        }
    }
}

console.clear();
const myPrimes = [2, 3, 7, 11, 13, 19, 23];
process.stdout.write('Type a number: ');
process.stdin.on('readable', ()=>{
    const num = parseInt(process.stdin.read());
    if (isPrime(num, myPrimes)){
        console.log(`Yes, ${num} is prime`);
    }
    else console.log(`No, ${num} is not prime`);
})
