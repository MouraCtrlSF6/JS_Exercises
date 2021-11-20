class PrimeNumber {
    constructor(num) {
        this._num = num
    }   

    previousPrimes() {
        const myNumbers = this.numbersUntilNum
        myNumbers.forEach(divisor => {
            if(divisor !== 'Out') {
                const nextDivisorIndex = myNumbers.indexOf(divisor) + 1
                myNumbers.forEach((number, index) => {
                    if(index >= nextDivisorIndex && typeof number === 'number') {
                        myNumbers[index] = !(number % divisor) ? 'Out' : number
                    }
                })
            }
        })
        return myNumbers.filter(number => number !== 'Out')
    }
    get numbersUntilNum() {
        const myNumbers = []
        for (let i=2; i<this.num+1; i++){
            myNumbers.push(i) 
        }
        return myNumbers
    }
    get num() {
        return this._num
    }
}

function main() {
    const input = process.argv.slice(2)
    const num = parseInt(input[0])
    const myPrimes = new PrimeNumber(num).previousPrimes()
    const validators = [
        {
            name: 'Number not provided',
            description: `\nJunto a abertura do arquivo, digite um número conforme o exemplo:\nnode .\\Desafio_3_Node.js 100\n`,
            valid: !!input.length
        },
        {
            name: 'No positive prime numbers exist',
            description: `\nNão há números primos positivos até ${num}.\n`,
            valid: !!myPrimes.length
        }
    ]
    const error = validators.find(item => !item.valid)
    if(error) return console.error(error.description)
    return console.log(`\nOs números primos até ${num} são:\n${myPrimes.join(',')}\n`)
} main()