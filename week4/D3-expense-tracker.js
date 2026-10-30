const transactions = [
  { name: "Salary", amount: 21000, category: "income" },
  { name: "Rent", amount: -7500, category: "housing" },
  { name: "Netto", amount: -412, category: "food" },
  { name: "Rejsekort", amount: -300, category: "transport" },
  { name: "Pizza", amount: -189, category: "food" },
  { name: "Netflix", amount: -129, category: "fun" },
];

// 1. Get the total balance
function getBalance(transactions) {
  let balance = 0;

  for (let i = 0; i < transactions.length; i++) {
    balance = balance + transactions[i].amount;
  }

  return balance;
}

// 2. Get the biggest expense
function getBiggestExpense(transactions) {
  let biggestExpense = null;

  for (let i = 0; i < transactions.length; i++) {
    if (
      transactions[i].amount < 0 &&
      (biggestExpense === null ||
        transactions[i].amount < biggestExpense.amount)
    ) {
      biggestExpense = transactions[i];
    }
  }

  return biggestExpense;
}

// 3. Get spending by category
function getSpendingByCategory(transactions) {
  let spending = {};

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];

    if (transaction.category !== "income") {
      let category = transaction.category;
      let amount = transaction.amount * -1;

      if (spending[category] === undefined) {
        spending[category] = 0;
      }

      spending[category] = spending[category] + amount;
    }
  }

  return spending;
}

// 4. Bonus: Show warning for spending over 500 kr
function showSpendingWarnings(spending) {
  for (let category in spending) {
    if (spending[category] > 500) {
      console.log("⚠️ You spent " + spending[category] + " kr on " + category);
    }
  }
}

// Test the functions
console.log("Balance:", getBalance(transactions));

console.log("Biggest expense:", getBiggestExpense(transactions));

let spending = getSpendingByCategory(transactions);

console.log("Spending by category:", spending);

showSpendingWarnings(spending);







