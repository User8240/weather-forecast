export default class Calc {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }; 
  CalcMercury() {
    let mercuryAge = 0
    let ageAndExpect = ""
    if (this.age < this.lifeExpect) {
      mercuryAge = this.age * .24 
      ageAndExpect = mercuryAge + "; You're under your life expectancy on Mercury!"
    };
    return ageAndExpect
  };
};