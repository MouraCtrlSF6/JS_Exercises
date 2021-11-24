const fs = require('fs');

// function readFileFromWebBrowser(file) {
//   const fileReader = new FileReader();


//   // Choose between one of this depending on how 
//   // your file is returned:

//   // fileReader.readAsDataURL(file)
//   // fileReader.readAsArrayBuffer(file)
//   // fileReader.readAsBinaryString(file)
//   // fileReader.readAsText(file)

//   fileReader.onload = () => {
//     const base64File = fileReader.result
//     console.log(base64File);
//   }

//   fileReader.onerror = (error) => {
//     console.log(error)
//   }
// }

function convertFile(file) {
  // Try to convert it to utf-8 and look at the ASCII enconding table
  // to understante how this conversion is done.

  // const utf8File = file.toString('utf-8')
  const base64File = file.toString('base64')
  console.log(base64File)
}

function getPhoto() {
  fs.readFile('./imagens/kirito.png', (erros, buffer) => {
    if(erros){
      console.log(erros)
    } else {
      console.log('Size of file: ', Buffer.byteLength(buffer))
      // Take a look at the roow binary data first
      // console.log(buffer) 
      convertFile(buffer)
    }
  })
}

// function makeFile() {
//   const myFile = File()
//   console.log(myFile)
// }

getPhoto()