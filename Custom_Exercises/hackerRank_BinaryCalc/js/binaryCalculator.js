const divs = document.querySelectorAll('div')

class BinaryCalculator {
  constructor() {
    this.calculator = new Array('', '', '')
    this.turnCounter = 0
    this.displayEl = divs[0]
    this.btns = {
      btn0: divs[2],
      btn1: divs[3],
      btnClr: divs[4],
      btnEql: divs[5],
      btnSum: divs[6],
      btnSub: divs[7],
      btnMul: divs[8],
      btnDiv: divs[9],
    }
    this._setEvents()
  }

  _updateDisplay() {
    const content = this.calculator.join(' ')
    this.displayEl.innerHTML = content
  }
  _decToBin(dec) {
    return (dec >>> 0).toString(2)
  }
  _binToDec(bin) {  
    return parseInt(bin.toString(), 2)
  }

  _setEvents() {
    for(const btn in this.btns) {
      this.btns[btn].addEventListener('click', () => {
        this._eventPicker(btn)
      })
    } 
  }

  _eventPicker(btn) {
    switch(btn){
      case 'btn0': 
        this._btnNumEvent('0');
        break;
      case 'btn1': 
        this._btnNumEvent('1');
        break;
      case 'btnEql':
        this._btnEqlEvent();
        break;
      case 'btnClr':
        this._btnClrEvent();
        break;
      case 'btnSum': 
        this._btnOpEvent('+');
        break;
      case 'btnSub': 
        this._btnOpEvent('-');
        break;
      case 'btnMul':
        this._btnOpEvent('*');
        break;
      case 'btnDiv': 
        this.btnOpEvent('/');
        break;
      default: return false
    }
  }

  _btnNumEvent(num) {
    this.calculator[this.turnCounter] += num
    this._updateDisplay()
  }
  _btnOpEvent(op) {
    this.turnCounter = 1
    this.calculator[this.turnCounter] = op
    this.turnCounter = 2
    this.calculator[this.turnCounter] = ''
    this._updateDisplay()
  }
  _btnEqlEvent() {
    this.turnCounter = 0
    
    if(this.calculator[0] && this.calculator[1] && this.calculator[2]) {
      this.calculator[this.turnCounter] = eval(`
        ${this._binToDec(this.calculator[0])}
        ${this.calculator[1]}
        ${this._binToDec(this.calculator[2])}
      `)
      this.calculator[this.turnCounter] = this._decToBin(this.calculator[this.turnCounter])
    }
    this.calculator[1] = ''
    this.calculator[2] = ''
    this._updateDisplay()
  }
  _btnClrEvent() {
    this.turnCounter = 0
    this.calculator = ['', '', '']
    this._updateDisplay()
  }
}

const app = new BinaryCalculator()

console.dir(app)