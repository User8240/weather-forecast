export const kevToFahr = (temp) => {
  let showFahr = ""
  
  showFahr = Math.floor(1.8 * (temp - 273) + 32)
  return showFahr
};

