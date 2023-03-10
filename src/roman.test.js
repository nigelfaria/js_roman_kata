import {
  numberToRoman,
  romanToNumber,
} from "./roman";

describe("numberToRoman", () => {
  test("Test for individual roman symbols 1,5,10,50,100,500,1000", () => {
    expect(numberToRoman(1)).toBe("I");
    expect(numberToRoman(5)).toBe("V");
    expect(numberToRoman(10)).toBe("X");
    expect(numberToRoman(50)).toBe("L");
    expect(numberToRoman(100)).toBe("C");
    expect(numberToRoman(500)).toBe("D");
    expect(numberToRoman(1000)).toBe("M");
  });

  test("Test for additive roman numerals 2,3,20,30,20,300", () => {
    expect(numberToRoman(2)).toBe("II");
    expect(numberToRoman(3)).toBe("III");
    expect(numberToRoman(20)).toBe("XX");
    expect(numberToRoman(30)).toBe("XXX");
    expect(numberToRoman(200)).toBe("CC");
    expect(numberToRoman(300)).toBe("CCC");
    expect(numberToRoman(2000)).toBe("MM");
    expect(numberToRoman(3000)).toBe("MMM");

  });

  test("Test for subtractive roman numerals 4,9,40,90,400", () => {
    expect(numberToRoman(4)).toBe("IV");
    expect(numberToRoman(9)).toBe("IX");
    expect(numberToRoman(40)).toBe("XL");
    expect(numberToRoman(90)).toBe("XC");
    expect(numberToRoman(400)).toBe("CD");
    expect(numberToRoman(900)).toBe("CM");
  });

  test("Test for output with multiple numerals - additive", () => {
    expect(numberToRoman(6)).toBe("VI");
    expect(numberToRoman(7)).toBe("VII");
    expect(numberToRoman(8)).toBe("VIII");
    expect(numberToRoman(11)).toBe("XI");
    expect(numberToRoman(12)).toBe("XII");
    expect(numberToRoman(13)).toBe("XIII");
    expect(numberToRoman(16)).toBe("XVI");
    expect(numberToRoman(31)).toBe("XXXI");
    expect(numberToRoman(55)).toBe("LV");
    expect(numberToRoman(1501)).toBe("MDI");
    expect(numberToRoman(2700)).toBe("MMDCC");
    expect(numberToRoman(3552)).toBe("MMMDLII");
  });

  test("Test with subtractive & additive output - random essentially", () => {
    expect(numberToRoman(14)).toBe("XIV");
    expect(numberToRoman(19)).toBe("XIX");
    expect(numberToRoman(24)).toBe("XXIV");
    expect(numberToRoman(25)).toBe("XXV");
    expect(numberToRoman(42)).toBe("XLII");
    expect(numberToRoman(1288)).toBe("MCCLXXXVIII");
    expect(numberToRoman(2348)).toBe("MMCCCXLVIII");
    expect(numberToRoman(3999)).toBe("MMMCMXCIX");
  });

  test("Test invalid numbers return empty strings", () => {
    expect(numberToRoman()).toBe("");
    expect(numberToRoman(0)).toBe("");
    expect(numberToRoman(-1)).toBe("");
    expect(numberToRoman(5.7)).toBe("");
    expect(numberToRoman(4000)).toBe("");
    expect(numberToRoman("400")).toBe("");
    expect(numberToRoman("what")).toBe("");
    expect(numberToRoman([])).toBe("");
  });


});

describe("romanToNumber", () => {
  test("Test invalid input return empty strings", () => {
    expect(romanToNumber()).toBe(0);
    expect(romanToNumber(0)).toBe(0);
    expect(romanToNumber("400")).toBe(0);
    expect(romanToNumber("what")).toBe(0);
    expect(romanToNumber("")).toBe(0);
    expect(romanToNumber("  ")).toBe(0);
  });

  test("Test individual symbols I, V, X, L, C, D, M", () => {
    expect(romanToNumber("I")).toBe(1);
    expect(romanToNumber("V")).toBe(5);
    expect(romanToNumber("X")).toBe(10);
    expect(romanToNumber("L")).toBe(50);
    expect(romanToNumber("C")).toBe(100);
    expect(romanToNumber("D")).toBe(500);
    expect(romanToNumber("M")).toBe(1000);
  });

  test("Test additive symbol strings", () => {
    expect(romanToNumber("II")).toBe(2);
    expect(romanToNumber("III")).toBe(3);
    expect(romanToNumber("XXX")).toBe(30);
    expect(romanToNumber("CCC")).toBe(300);
    expect(romanToNumber("MM")).toBe(2000);
    expect(romanToNumber("VV")).toBe(0);
    expect(romanToNumber("LL")).toBe(0);
    expect(romanToNumber("VVV")).toBe(0);
    expect(romanToNumber("DDD")).toBe(0);
    expect(romanToNumber("IIII")).toBe(0);
    expect(romanToNumber("CCCC")).toBe(0);
    expect(romanToNumber("XXXX")).toBe(0);

  });

  test("Test subtractive symbol strings", () => {
    expect(romanToNumber("IV")).toBe(4);
    expect(romanToNumber("IX")).toBe(9);
    expect(romanToNumber("XL")).toBe(40);
    expect(romanToNumber("XC")).toBe(90);
    expect(romanToNumber("CD")).toBe(400);
    expect(romanToNumber("CM")).toBe(900);
  });

  test("Test for output with multiple symbols - additive", () => {
    expect(romanToNumber("VI")).toBe(6);
    expect(romanToNumber("VII")).toBe(7);
    expect(romanToNumber("VIII")).toBe(8);
    expect(romanToNumber("XI")).toBe(11);
    expect(romanToNumber("XII")).toBe(12);
    expect(romanToNumber("XIII")).toBe(13);
    expect(romanToNumber("XVI")).toBe(16);
    expect(romanToNumber("XXXI")).toBe(31);
    expect(romanToNumber("XXXIV")).toBe(34);
    expect(romanToNumber("LV")).toBe(55);
    expect(romanToNumber("MDI")).toBe(1501);
    expect(romanToNumber("MMDCC")).toBe(2700);
    expect(romanToNumber("MMMDLII")).toBe(3552);
    
  });

  test("Test for output with multiple symbols - mixed", () => {
    expect(romanToNumber("XIV")).toBe(14);
    expect(romanToNumber("XIX")).toBe(19);
    expect(romanToNumber("XXIV")).toBe(24);
    expect(romanToNumber("XXV")).toBe(25);
    expect(romanToNumber("XLII")).toBe(42);
    expect(romanToNumber("MCCLXXXVIII")).toBe(1288);
    expect(romanToNumber("MMCCCXLVIII")).toBe(2348);
    expect(romanToNumber("MMMCMXCIX")).toBe(3999);
    expect(romanToNumber("XXCD")).toBe(0);
    expect(romanToNumber("XIX")).toBe(19);
    expect(romanToNumber("LXL")).toBe(0);
    expect(romanToNumber("CVIV")).toBe(0);
    expect(romanToNumber("VIV")).toBe(0);
    

  });



});