// Sort data is ascending order based on price @params price
function sortAscending(price) {
  return price.sort((a, b) => a.salePrice - b.salePrice);
}

// Sort data is descending order based on price @params price
function sortDescending(price) {
  return price.sort(
    (a, b) => parseFloat(b.salePrice) - parseFloat(a.salePrice)
  );
}

// Convert Cents to Dollars @params cents to be converted
function convertToDollars(amount) {
  return amount && (amount / 100).toFixed(2);
}

// Format amount and add $ sign @params amount to be formatted
function formatAmount(amount) {
  return amount && amount.replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Fetch data form server @params: URL to fetch data from
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
