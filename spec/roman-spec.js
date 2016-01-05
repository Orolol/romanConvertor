#!javascript

var convertor = require("../roman.js");

describe("convertions", function () {
  it("1 = I", function () {
    var result = convertor.romanConvertor(1);
    expect(result).toBe('I');
  });
   it("5 = V", function () {
    var result = convertor.romanConvertor(5);
    expect(result).toBe('V');
  });
    it("10 = X", function () {
    var result = convertor.romanConvertor(10);
    expect(result).toBe('X');
  });
     it("50 = L", function () {
    var result = convertor.romanConvertor(50);
    expect(result).toBe('L');
  });
     it("100 = C", function () {
    var result = convertor.romanConvertor(100);
    expect(result).toBe('C');
  });
    it("500 = D", function () {
    var result = convertor.romanConvertor(500);
    expect(result).toBe('D');
  });
     it("1000 = M", function () {
    var result = convertor.romanConvertor(1000);
    expect(result).toBe('M');
  });
});  

describe("date", function () {
  it("1954 = MCMLIV", function () {
    var result = convertor.romanConvertor(1954);
    expect(result).toBe('MCMLIV');
  });
   it("1990 = MCMXC", function () {
    var result = convertor.romanConvertor(1990);
    expect(result).toBe('MCMXC');
  });

});

describe("limite case", function () {
  it("-1 = Error wrong input", function () {
    var result = convertor.romanConvertor(-1);
    expect(result).toBe('Error wrong input');
  });
   it("9999 = MMMMMMMMMCMXCIX", function () {
    var result = convertor.romanConvertor(9999);
    expect(result).toBe('MMMMMMMMMCMXCIX');
  });
      it("999999 = Error wrong input", function () {
    var result = convertor.romanConvertor(9999999);
    expect(result).toBe('Error wrong input');
  });
    it("string = Error wrong input", function () {
    var result = convertor.romanConvertor('string');
    expect(result).toBe('Error wrong input');
  });

});  