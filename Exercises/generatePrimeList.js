class PrimeNumber {
  static previousPrimes(num) {
    const myNumbers = PrimeNumber.generateList(2, num - 1)

    myNumbers.forEach((divisor, slowIndex) => {
      const nextIndex = slowIndex + 1
      
      myNumbers.forEach((number, index) => {
        if(index <= nextIndex) {
          return;
        }
        if(!(number % divisor)) {
          myNumbers.splice(index, 1)
        }
      })
    })

    return myNumbers
  }

  static generateList(start, stop) {
    return Array
      .apply(null, Array(stop))
      .map((_, index) => index + start)
  }
}

function validate(input) {
  const validations = [
    {
      name: 'Number not provided',
      description: `\nJunto a abertura do arquivo, digite um número conforme o exemplo:\nnode .\\Desafio_3_Node.js 100\n`,
      valid: !!input
    },
    {
      name: 'Non positive number',
      description: `\nFavor inserir apenas valores positivos.\n`,
      valid: input > 0
    }
  ]

  return validations.find(item => !item.valid)
}

function main() {
  const [ input ] = process.argv.slice(2)
  const num = parseInt(input)
  const error = validate(num)

  if (error) {
    return console.error(error.description)
  }

  const myPrimes = PrimeNumber.previousPrimes(num)
  
  if(!myPrimes.length) {
    console.log(`Não há números primos positivos até ${num}`)
  } else {
    console.log(`\nOs números primos até ${num} são:\n${myPrimes.join(',')}\n`)
  }
} 
main()