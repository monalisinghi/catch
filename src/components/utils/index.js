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

async function fetchDataFromServer(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return null;
  }
}

export {
  sortAscending,
  sortDescending,
  convertToDollars,
  formatAmount,
  fetchDataFromServer,
};
