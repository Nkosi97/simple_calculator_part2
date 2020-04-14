class Calculator {
  constructor() {
    this.lastNum = 0;
    this.slot = [];
  }

  add(...args) {
    let sum = 0;

    for (let num of args) {
      if (num == 'Last') {
        num = this.last();
      } else if (num == 'slot_' + num.toString().charAt(num.length - 1)) {
        sum += this.get_slot(num.charAt(num.length - 1));
      } else if (!isNaN(num)) {
        sum += num;
      }
    }

    this.slot.push(sum);
    return sum;
  }

  multiply(...args) {
    let product = 1;

    for (let num of args) {
      if (num == 'Last') {
        num = this.last();
      } else if (num == 'slot_' + num.toString().charAt(num.length - 1)) {
        product *= this.get_slot(num.charAt(num.length - 1));
      } else if (!isNaN(num)) {
        product *= num;
      }
    }
    
    this.slot.push(product);
    return product;
  }

  last() {
    return this.lastNum;
  }

  set_slot(num) {
    this.lastNum = this.slot[num - 1];
  }

  get_slot(num) {
    return this.slot[num - 1];
  }

}


const calc = new Calculator()


console.log(calc.add(2,2))
console.log(calc.add("LAST",2))
console.log(calc.set_slot(3))

module.exports = Calculator;

  

