const Calculator = require("../src/simple_Calculator_part2")
let calculator_instance = new Calculator
describe('calculate the total', function() {

  it('should display the sum', function() {
    expect(calculator_instance.add(1, 2)).toBe(3);
  });

  it('should return 10', function() {
    expect(calculator_instance.multiply("LAST"), 5).toBe(10);
  });

  it('should return 8', function() {
    expect(calculator_instance.add(3, 5)).toBe(8);
  });

  
  it('should return 60 ', function() {
    expect(calculator_instance.multiply(30, 2)).toBe(60);
  });

  it('should give the product of the array', function() {
    expect(calculator_instance.multiply(3,5,2)).toBe(10);
  });

  //memory slots

  it('Should take single number as slot number', function() {
    calculator_instance.add(1, 2);
    expect(calculator_instance.get_slot(1)).toEqual(9);
  });

  it('Should take slot number and add with a number', function() {
    calculator_instance.add(5, 4);
    calculator_instance.get_slot(1);
    expect(calculator_instance.add('slot_2', 2)).toBe(60);
  });
});