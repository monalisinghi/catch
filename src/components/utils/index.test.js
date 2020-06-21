import {
  convertToDollars,
  formatAmount,
  sortAscending,
  sortDescending,
  fetchDataFromServer,
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

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({ metadata: { query: "best sellers" }, results: [] }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("Load data from server", async () => {
  const data = await fetchDataFromServer(
    "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
  );

  expect(data).toEqual({ metadata: { query: "best sellers" }, results: [] });
  expect(fetch).toHaveBeenCalledTimes(1);
});

it("returns null when exception", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("API is down"));

  const data = await fetchDataFromServer(
    "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
  );

  expect(data).toEqual(null);
  expect(fetch).toHaveBeenCalledWith(
    "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json"
  );
});
