import Calc from './../src/calculator.js';

describe('Calc', () => {
  test('should correctly create a calcObject object holding age and life expectancy', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.age).toEqual(30);
    expect(calcObject.lifeExpect).toEqual(100);
  });

  test('should correctly return Mercury age and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcMercury()).toEqual("7.2; You're under your life expectancy on Mercury!");
  });
});
