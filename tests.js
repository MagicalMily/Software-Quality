// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('convertIntToRoman', function() {
    //Test Cases - Boundary testing
  it('should convert 1 to "I"', function() {
    expect(convertIntToRoman(1)).to.equal('I');
  });

  it('should convert 2 to "II"', function() {
    expect(convertIntToRoman(2)).to.equal('II');
  });

  it('should convert 3999 to "MMMCMXCIX"', function() {
    expect(convertIntToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should convert 3998 to "MMMCMXCVIII"', function() {
    expect(convertIntToRoman(3998)).to.equal('MMMCMXCVIII');
  });

  it('should throw an error for numbers more than 3999', function() {
    expect(() => convertIntToRoman(4000)).to.throw("Please enter a number between 1 and 3999.");
  });

  it('should throw an error for numbers less than 1', function() {
    expect(() => convertIntToRoman(0)).to.throw("Please enter a number between 1 and 3999.");
  });
});

describe('convertRomanToInt', function() {
    // Test Cases AI
    it('should convert "I" to 1', function() {
      expect(convertRomanToInt('I')).to.equal(1);
    });
    it('should convert "III" to 3', function() {
      expect(convertRomanToInt('III')).to.equal(3);
    });
    it('should convert "IV" to 4', function() {
      expect(convertRomanToInt('IV')).to.equal(4);
    });
    it('should convert "X" to 10', function() {
      expect(convertRomanToInt('X')).to.equal(10);
    });
    it('should convert "IX" to 9', function() {
      expect(convertRomanToInt('IX')).to.equal(9);
    });
    it('should convert "M" to 1000', function() {
      expect(convertRomanToInt('M')).to.equal(1000);
    });
    it('should throw an error for numbers more than 3999', function() {
        expect(() => convertRomanToInt('MMMM')).to.throw("Invalid Roman Numeral");
    });
    it('should throw error for rules', function() {
        expect(() => convertRomanToInt('IIII')).to.throw("Invalid Roman Numeral")
    });

    //I don not consider it returning 0 an error when it's an empty string, I tested both just in case
    it('should convert "" to 0', function() {
      expect(convertRomanToInt('')).to.equal(0);
    });
    /*
    it('should throw an error for empty input', function() {
        expect(() => convertRomanToInt('')).to.throw("Invalid Roman Numeral");
    });
    */

    it('should convert "XXVII" to 27', function() {
        expect(convertRomanToInt('XXVII')).to.equal(27);
    });
    it('should convert "CDXLIV" to 444', function() {
        expect(convertRomanToInt('CDXLIV')).to.equal(444);
    });
    it('should throw error for invalid input', function() {
        expect(() => convertRomanToInt('AB')).to.throw("Invalid Roman Numeral")
    });
    
  });
