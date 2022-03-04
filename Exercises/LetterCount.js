function contarLetras(arrayDePalavras) {
  if(validaArray(arrayDePalavras)){
    if (validaPalavras(arrayDePalavras)) {
      const numeroDeLetras = arrayDePalavras.map(palavra => palavra.length)
      return numeroDeLetras.reduce((a, b) => a+b)
    }
    return false
  }
  return false
}

function validaPalavras(arrayDePalavras) {
  const regExp = new RegExp(/[^a-zA-Z]/)
  const validacao = arrayDePalavras.map(palavra => regExp.test(palavra))
  return !validacao.includes(true)
}

function validaArray(arrayDePalavras) {
  return Array.isArray(arrayDePalavras)
}

const numero = contarLetras(['um', 'doze', 'tres', 'quatro', 'cinco'])

console.log(numero)
