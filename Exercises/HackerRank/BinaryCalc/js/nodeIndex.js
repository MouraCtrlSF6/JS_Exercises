const Module = import("./binaryCalculator.js")

async function main() {
  try {
    const divs = document.querySelectorAll('div')
    const { default: BinaryCalculator } = await Module
    return new BinaryCalculator(divs)
  } catch(e) {
    console.error("An error has occurred: ", e.message)
  }
}

main();