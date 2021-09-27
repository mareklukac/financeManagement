import { useState } from "react";
import BalanceContext from "./balance-context";

const BalanceProvider = (props) => {
  const [balanceState, setBalanceState] = useState(0);
  const [incomesItems, setIncomesItems] = useState([]);
  const [expensesItems, setExpensesItems] = useState([]);
  const [totalIncomesAmount, setTotalIncomesAmount] = useState(0);
  const [totalExpensesAmount, setTotalExpensesAmount] = useState(0);

  const removeItemHandler = (id) => {
    return;
  };

  const addItemHandler = (item) => {
    if (item.action === "incomes") {
      setIncomesItems((prevItems) => {
        return [item, ...prevItems];
      });
      setTotalIncomesAmount((prevAmount) => {
        const finalAmount = prevAmount + item.amount;
        console.log(finalAmount);
        return finalAmount;
      });
    } else if (item.action === "expenses") {
      setExpensesItems((prevItems) => {
        return [item, ...prevItems];
      });
      setTotalExpensesAmount((prevAmount) => {
        const finalAmount = prevAmount + item.amount;
        return finalAmount;
      });
    }

    setBalanceState((prevAmount) => {
      const finalAmount =
        prevAmount + (totalIncomesAmount - totalExpensesAmount);
      return finalAmount;
    });
  };

  const balanceContext = {
    totalBalance: balanceState,
    expensesItems: expensesItems,
    incomesItems: incomesItems,
    totalExpensesAmount: totalExpensesAmount,
    totalIncomesAmount: totalIncomesAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <BalanceContext.Provider value={balanceContext}>
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
