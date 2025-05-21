// Function to convert Roman to Integer
function convertRomanToInt(roman) {
  let controller = false;
  if (typeof roman === 'undefined') {
    roman = document.getElementById('romanInput').value.toUpperCase();
    controller = true;
  }
  const romanNumerals = { 
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 
  };
  let total = 0;
  let prevValue = 0;
  if (!roman.match(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/)) {
    if (controller === true) {
      document.getElementById('romanResult').textContent = 'Invalid Roman Numeral';
      document.getElementById('romanResult').classList.add('error');
    }
    throw new Error('Invalid Roman Numeral');
  }
  for (let i = roman.length - 1; i >= 0; i--) {
    const currentValue = romanNumerals[roman[i]];
    if (currentValue < prevValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    prevValue = currentValue;
  }
  if (controller === true) {
    document.getElementById('romanResult').textContent = total;
    document.getElementById('romanResult').classList.remove('error');
  }
  
  return total;
}

// Function to convert Integer to Roman
function convertIntToRoman(num) {
  let controller = false;
  if (typeof num === 'undefined') {
    num = parseInt(document.getElementById('integerInput').value);
    controller = true;
  }
  let result = '';
  if (isNaN(num) || num < 1 || num > 3999) {
    if (controller === true) {
      document.getElementById('integerResult').textContent = 'Please enter a number between 1 and 3999.';
      document.getElementById('integerResult').classList.add('error');
    }
    throw new Error('Please enter a number between 1 and 3999.');
  }
  const romanNumerals = [
    ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
    ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
  ];
  for (let [symbol, value] of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  if (controller === true) {
    document.getElementById('integerResult').textContent = result;
    document.getElementById('integerResult').classList.remove('error');
  }
  gtag('event', 'convertIntToRoman',{ 'Result': result });
  return result;
}
