import Calc from './../src/calculator.js';

describe('Calc', () => {
  test('should correctly create a calcObject object holding age and life expectancy', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.age).toEqual(30);
    expect(calcObject.lifeExpect).toEqual(100);
  });
  test('should correctly return Mercury age, years left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcMercury()).toEqual("You are 125 years old on Mercury. You have 292 years left to live!");
  });
  test('should correctly return Venus age, years left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcVenus()).toEqual("You are 48 years old on Venus. You have 113 years left to live!");
  });
  test('should correctly return Mars age, years left, and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcMars()).toEqual("You are 16 years old on Mars. You have 37 years left to live!");
  });
  test('should correctly return Jupiter age and corresponding life expectancy message', () => {
    const calcObject = new Calc(30,100);
    expect(calcObject.CalcJupiter()).toEqual("3; You're under your life expectancy on Jupiter!");
  });
});
