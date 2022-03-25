function generateNextPrime(myPrimes) {
  let lastKnown = myPrimes[(myPrimes.length) - 1];

  while (true) {
    lastKnown += 1

    for (let currentPrime of myPrimes) {
      if (!(lastKnown % currentPrime)) {
        break;
      }
      if (lastKnown % currentPrime > parseInt(i / currentPrime)) {
        return lastKnown
      }
    }
  }
}

function isPrime(num) {
  const myPrimes = [2, 3, 5]

  for (let [index, prime] of Object.entries(myPrimes)) {
    if (num % prime > parseInt(num / prime)) {
      return true;
    }
    if (num % prime === 0 && num !== prime) {
      return false;
    }
    if (index === myPrimes.length - 1) {
      myPrimes.push(generateNextPrime(myPrimes))
    }
  }
}

console.clear();

process.stdout.write('Type a number: ');
process.stdin.on('readable', () => {
  const num = parseInt(process.stdin.read());
  console.log(isPrime(Number(num)) ? `Yes, ${num} is prime` : `No, ${num} is not prime`)
})
