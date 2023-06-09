import { sum } from "../src/calc";

test("sum", () => {
  expect(sum(10, 10, 10)).toBe(30);
});
