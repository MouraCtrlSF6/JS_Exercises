
class Console {
  static buffer = {
    stdin: null,
    message: null,
  }

  static _cloneValues(initialState, target) {
    Object.keys(initialState).forEach(key => {
      if(typeof initialState[key] === "object" && initialState[key] !== null) {
        Console._cloneValues(initialState[key], target[key]);
        return;
      }
  
      if(initialState[key] !== target[key]) {
        target[key] = initialState[key];
        return;
      }
    })
  }

  static _refreshStdin() {
    if(!Console.buffer.stdin) {
      Console.buffer.stdin = JSON.parse(JSON.stringify(process.stdin));
      return;
    }
    Console.buffer.message = null;
  
    Console._cloneValues(Console.buffer.stdin, process.stdin);
  }

  static readLine() {
    return new Promise((resolve, reject) => {
      Console._refreshStdin();
  
      process.stdin.on('readable', () => {
        const input = process.stdin.read();
  
        if(Console.buffer.message === null) {
          Console.buffer.message = input;
        }
        resolve(Console
          .buffer
          .message
          .toString()
          .replace("\n", "")
        );
      })
      process.stdin.on('error', (e) => {
        console.log('error')
        reject(e);
      });
    })
  }

  static writeLine(message) {
    console.log(message);
    return;
  }

  static close() {
    process.stdin.destroy();
    return;
  }
}