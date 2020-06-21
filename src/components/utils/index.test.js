import {
  convertToDollars,
  formatAmount,
  sortAscending,
  sortDescending,
} from "./index";

test("1000 cents is 10.00 dollar", () => {
  expect(convertToDollars(1000)).toBe("10.00");
});

test("1000.00 dollars should be 1,000.00", () => {
  const value = formatAmount("1000.00");
  expect(value).toBe("1,000.00");
});

test("[10, 4, 8, 2] to be sorted in Ascending order [2, 4, 8, 10]", () => {
  expect(
    sortAscending([
      { salePrice: 10 },
      { salePrice: 4 },
      { salePrice: 8 },
      { salePrice: 2 },
    ])
  ).toStrictEqual([
    { salePrice: 2 },
    { salePrice: 4 },
    { salePrice: 8 },
    { salePrice: 10 },
  ]);
});

test("[10, 4, 8, 2] to be sorted in Ascending order [10, 8, 4, 2]", () => {
  expect(
    sortDescending([
      { salePrice: 10 },
      { salePrice: 4 },
      { salePrice: 8 },
      { salePrice: 2 },
    ])
  ).toStrictEqual([
    { salePrice: 10 },
    { salePrice: 8 },
    { salePrice: 4 },
    { salePrice: 2 },
  ]);
});
