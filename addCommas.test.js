const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it should return a string of a number with commas if the number is bigger than 999", () => {
    expect(addCommas(1234)).toEqual("1,234");
    expect(addCommas(1000000)).toEqual("1,000,000");
    expect(addCommas(9876543210)).toEqual("9,876,543,210");
    expect(addCommas(6)).toEqual("6");
  });

  test("it should return a string of a negative number with commas (if the number is bigger than 999) and dash", () => {
    expect(addCommas(-10)).toEqual("-10");
    expect(addCommas(-5678)).toEqual("-5,678");
  });
});
