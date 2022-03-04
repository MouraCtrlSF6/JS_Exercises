const fs = require('fs')

class FileService {
  static generateBase64(file) {
    return file.toString('base64')
  }

  static getPhoto(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(`${process.cwd()}/${path}`, (err, buffer) => {
        if(err) { 
          console.log('An error has occurred: ', err.message)
          reject(err)
        }
        resolve({
          operation: 'readFile',
          path: `${process.cwd()}/${path}`,
          bufferData: buffer,
          base64: FileService.generateBase64(buffer)
        })
      })
    })
  }

  static setPhoto(destinyPath, base64Data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(destinyPath, base64Data, 'base64', (err) => {
        if(err) {
          console.log('An error has occurred: ', err.message)
          reject(err)
        }
        resolve({
          operation: 'writeFile',
          path: destinyPath,
          base64: base64Data,
          bufferData: Buffer.from(base64Data, 'base64'),
          created_at: new Date()
        })
      })
    })
  }


  // FileReader API only exists on web browser.
  static readFileFromWebBrowser(file) {
    const fileReader = new FileReader();

    // Choose between one of this depending on how 
    // your file is returned:
  
    // fileReader.readAsDataURL(file)
    // fileReader.readAsArrayBuffer(file)
    // fileReader.readAsBinaryString(file)
    // fileReader.readAsText(file)

    return new Promise((resolve, reject) => {
      fileReader.onload = () => {
        fileReader.result
        resolve({
          operation: 'readFile',
          base64Data: fileReader.result
        })
      }

      fileReader.onerror = (error) => {
        console.error("An error has occurred: ", error.message)
        reject(error)
      }
    })
  }  
}