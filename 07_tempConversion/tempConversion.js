const ftoc = function(fahrenheit) {
  // formula to convert F to C
  let celsius = (fahrenheit - 32) * 5 / 9;
  // reformat conversion results to be rounded to one decimal place (becomes a String type)
  celsius = (Math.round(celsius * 10) / 10).toFixed(1);
  // return reformatted conversion as a Number type
  return Number(celsius);
};

const ctof = function(celsius) {
  // formula to convert C to F
  let fahrenheit = celsius * 9 / 5 + 32;
  // reformat conversion results to be rounded to one decimal place (becomes a String type)
  fahrenheit = (Math.round(fahrenheit * 10) / 10).toFixed(1);
  // return reformatted conversion as a Number type
  return Number(fahrenheit);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
