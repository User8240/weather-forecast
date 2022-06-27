export default class Calc {
  constructor(age, lifeExpect) {
    this.age = age;
    this.lifeExpect = lifeExpect;
  }; 
  CalcMercury() {
    let mercuryAge = 0
    let ageAndExpect = ""
    let mercLifeExp = 0
    let yearsLeft = 0
  
    mercuryAge = this.age / .24 
    mercLifeExp = this.lifeExpect / .24
    yearsLeft = mercLifeExp - mercuryAge
    if (mercLifeExp > mercuryAge) {
      ageAndExpect = "You are " + mercuryAge.toFixed(0) + " years old on Mercury. You have " + yearsLeft.toFixed(0) + " years left to live!"
    } else if (mercLifeExp < mercuryAge) {
      ageAndExpect = "You are " + mercuryAge.toFixed(0) + " years old on Mercury. You are " + yearsLeft.toFixed(0) + " years over your life expectancy!"
    };
    return ageAndExpect
  };

  CalcVenus() {
    let venusAge = 0
    let ageAndExpect = ""
    let venusLifeExp = 0
    let yearsLeft = 0
  
    venusAge = this.age / .62 
    venusLifeExp = this.lifeExpect / .62
    yearsLeft = venusLifeExp - venusAge
  
    venusAge = this.age / .62 
    if (venusLifeExp > venusAge) {
      ageAndExpect = "You are " + venusAge.toFixed(0) + " years old on Venus. You have " + yearsLeft.toFixed(0) + " years left to live!"
    } else if (venusLifeExp < venusAge) {
      ageAndExpect = "You are " + venusAge.toFixed(0) + " years old on Venus. You are " + yearsLeft.toFixed(0) + " years over your life expectancy!"
    };
    return ageAndExpect
  };

  CalcMars() {
    let marsAge = 0
    let ageAndExpect = ""
  
    marsAge = this.age / 1.88 
    if (this.lifeExpect > marsAge) {
      ageAndExpect = marsAge.toFixed(0) + "; You're under your life expectancy on Mars!"
    } else if (this.lifeExpect < marsAge) {
      ageAndExpect = marsAge.toFixed(0) + "; You're over your life expectancy on Mars!"
    };
    return ageAndExpect
  };

  CalcJupiter() {
    let jupiterAge = 0
    let ageAndExpect = ""
  
    jupiterAge = this.age / 11.86 
    if (this.lifeExpect > jupiterAge) {
      ageAndExpect = jupiterAge.toFixed(0) + "; You're under your life expectancy on Jupiter!"
    } else if (this.lifeExpect < marsAge) {
      ageAndExpect = jupiterAge.toFixed(0) + "; You're over your life expectancy on Jupiter!"
    };
    return ageAndExpect
  };

};
  
