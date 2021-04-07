const abbreviation = (inputString) => {
  if (inputString.length < 3) {
    throw new Error("Input string should be greater than three chars");
  }

  const actualString = inputString.trim()

  const abbreviationString =
  actualString.charAt(0) +
  actualString.slice(1, -1).length +
  actualString.charAt(actualString.length - 1);

  return abbreviationString;
};

describe("abbreviation Tests", () => {
  it("throws an error if the input is empty", () => {
    expect(() => {
      abbreviation("");
    }).toThrow("Input string should be greater than three chars");
  });

  it("returns the expected result", () => {
    expect(abbreviation("My awesome playlist")).toEqual("M17t");
  });
});
