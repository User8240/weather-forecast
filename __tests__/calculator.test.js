import Calc from './../src/calculator.js';

describe('Calc', () => {
  test('should correctly create a calcObject object holding age and life expectancy', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.age).toEqual(30);
    expect(calcObject.lifeExpect).toEqual(100);
  });
});