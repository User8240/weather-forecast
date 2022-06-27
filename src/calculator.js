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
    let marsLifeExp = 0
    let yearsLeft = 0
  
    marsAge = this.age / 1.88
    marsLifeExp = this.lifeExpect / 1.88
    yearsLeft = marsLifeExp - marsAge
  
    if (marsLifeExp > marsAge) {
      ageAndExpect = "You are " + marsAge.toFixed(0) + " years old on Mars. You have " + yearsLeft.toFixed(0) + " years left to live!"
    } else if (marsLifeExp < marsAge) {
      ageAndExpect = "You are " + marsAge.toFixed(0) + " years old on Mars. You are " + yearsLeft.toFixed(0) + " years over your life expectancy!"
    };
    return ageAndExpect
  };

  CalcJupiter() {
    let jupiterAge = 0
    let ageAndExpect = ""
    let jupLifeExp = 0
    let yearsLeft = 0
  
    jupiterAge = this.age / 11.86
    jupLifeExp = this.lifeExpect / 11.86
    yearsLeft = jupLifeExp - jupiterAge
  
    if (jupLifeExp > jupiterAge) {
      ageAndExpect = "You are " + jupiterAge.toFixed(0) + " years old on Jupiter. You have " + yearsLeft.toFixed(0) + " years left to live!"
    } else if (jupLifeExp < marsAge) {
      ageAndExpect = "You are " + jupiterAge.toFixed(0) + " years old on Jupiter. You are " + yearsLeft.toFixed(0) + " years over your life expectancy!"
    };
    return ageAndExpect
  };
};
  
