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
      ageAndExpect = mercuryAge.toFixed(0) + "; You're under your life expectancy on Mercury!"
    } else if (this.lifeExpect < mercuryAge) {
      ageAndExpect = mercuryAge.toFixed(0) + "; You're over your life expectancy on Mercury!"
    };
    return ageAndExpect
  };

  CalcVenus() {
    let venusAge = 0
    let ageAndExpect = ""
  
    venusAge = this.age / .62 
    if (this.lifeExpect > venusAge) {
      ageAndExpect = venusAge.toFixed(0) + "; You're under your life expectancy on Venus!"
    } else if (this.lifeExpect < venusAge) {
      ageAndExpect = venusAge.toFixed(0) + "; You're over your life expectancy on Venus!"
    };
    return ageAndExpect
  };

};
  
