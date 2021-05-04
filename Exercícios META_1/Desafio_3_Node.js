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
    myPrimesOnly = myPrimes.filter(myPrimes => myPrimes!=='Out'); 
    return myPrimesOnly;
}

const num = parseInt(process.argv.slice(2));
console.clear();
switch(true){
    case process.argv.slice(2).length < 1:
        console.log(`Junto a abertura do arquivo, digite um número conforme o exemplo:`);
        console.log(`node .\\Desafio_3_Node.js 100\n`);
        break;
    case myPrimeList(num).length < 1:
        console.log(`Não há números primos positivos até ${num}.\n`);
        break;
    default:
        console.log(`Os números primos até ${num} são:\n${myPrimeList(num).toString()}\n`);
}
