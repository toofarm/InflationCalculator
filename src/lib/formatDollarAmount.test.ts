import "@testing-library/jest-dom";
import formatDollarAmount from "./formatDollarAmount";

test("formats numeric input with properly placed commas", () => {
  expect(formatDollarAmount(12500600.02)).toEqual("$12,500,600.02");
});

test("correctly formats numeric input without trailing decimal", () => {
  expect(formatDollarAmount(2050)).toEqual("$2,050.00");
});

test("does not add commas to numeric values smaller than 1000", () => {
  expect(formatDollarAmount(404.22)).toEqual("$404.22");
});
