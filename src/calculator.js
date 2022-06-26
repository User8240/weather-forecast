export default class Calc {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }; 
  CalcMercury() {
    let mercuryAge = 0
    let ageAndExpect = ""
  
    mercuryAge = this.age / .24 
    if (this.lifeExpect > mercuryAge) {
      ageAndExpect = mercuryAge + "; You're under your life expectancy on Mercury!"
    } else if (this.lifeExpect < mercuryAge) {
      ageAndExpect = mercuryAge + "; You're over your life expectancy on Mercury!"
    };
    return ageAndExpect
  };
};
  
