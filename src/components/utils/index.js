function sortAscending(price) {
  return price.sort((a, b) => a.salePrice - b.salePrice);
}

function sortDescending(price) {
  return price.sort(
    (a, b) => parseFloat(b.salePrice) - parseFloat(a.salePrice)
  );
}

function convertToDollars(amount) {
  return amount && (amount / 100).toFixed(2);
}

function formatAmount(amount) {
  return amount && amount.replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export { sortAscending, sortDescending, convertToDollars, formatAmount };
