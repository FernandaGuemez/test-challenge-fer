const procesarADN = require("../dna");

test("Bases canonica CTAGMc", () => {
  expect(procesarADN("CTAGMc")).toBe("CTAG");
});

test("Bases canonica CTAGGGTA", () => {
  expect(procesarADN("CTAGGGTA")).toBe("CTAGGGTA");
});
