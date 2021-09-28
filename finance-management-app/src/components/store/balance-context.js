import React from "react";

const BalanceContext = React.createContext({
  totalBalance: 0,
  expensesItems: [],
  incomesItems: [],
  totalExpensesAmount: 0,
  totalIncomesAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default BalanceContext;
