import React from "react";

const BalanceContext = React.createContext({
  totalBalance: 0,
  expensesItems: [],
  incomesItems: [],
  totalExpenseAmount: 0,
  totalIncomeAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default BalanceContext;
