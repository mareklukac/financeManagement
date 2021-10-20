import { useReducer } from "react";
import BalanceContext from "./balance-context";

const initialState = {
  incomesItems: [],
  expensesItems: [],
  totalAmount: 0,
  totalIncomeAmount: 0,
  totalExpenseAmount: 0,
};

const reducer = (state, action) => {
  // let updatedIncomeAmount;
  // let updatedExpenseAmount;
  // let updatedTotalAmount;
  // let updatedIncomeItems;
  // let updatedExpenseItems;

  switch (action.type) {
    case "ADD":
      if (action.item.action === "incomes") {
        return {
          ...state,
          totalIncomeAmount: state.totalIncomeAmount + action.item.amount,
          totalAmount: state.totalAmount + action.item.amount,
          incomesItems: [...state.incomesItems, action.item],
        };
      } else if (action.item.action === "expenses") {
        return {
          ...state,
          totalExpenseAmount: state.totalExpenseAmount + action.item.amount,
          totalAmount: state.totalAmount - action.item.amount,
          expensesItems: [...state.expensesItems, action.item],
        };
      }
      break;
    default:
      return initialState;
  }

  // if (action.item.action === "incomes" && action.type === "ADD") {
  //   updatedIncomeAmount = state.totalIncomeAmount + action.item.amount;
  //   updatedIncomeItems = state.items.push(action.item);
  //   updatedTotalAmount = state.totalAmount + action.item.amount;
  // }
  // if (action.item.action === "expenses" && action.type === "ADD") {
  //   updatedExpenseAmount = state.totalExpenseAmount + action.item.amount;
  //   updatedExpenseItems = state.items.push(action.type);
  //   updatedTotalAmount = state.totalAmount - action.item.amount;
  // }

  // return {
  //   incomeItems: updatedIncomeItems,
  //   expenseItems: updatedExpenseItems,
  //   totalAmount: updatedTotalAmount,
  //   totalIncomeAmount: updatedIncomeAmount,
  //   totalExpenseAmount: updatedExpenseAmount,
  // };
};

const BalanceProvider = (props) => {
  const [itemsState, dispatchItemsState] = useReducer(reducer, initialState);

  const removeItemHandler = (id) => {
    return;
  };

  const addItemHandler = (item) => {
    dispatchItemsState({
      type: "ADD",
      item: item,
    });
  };

  const balanceContext = {
    totalBalance: itemsState.totalAmount,
    expensesItems: itemsState.expensesItems,
    incomesItems: itemsState.incomesItems,
    totalExpensesAmount: itemsState.totalExpenseAmount,
    totalIncomesAmount: itemsState.totalIncomeAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  console.log(balanceContext);

  return (
    <BalanceContext.Provider value={balanceContext}>
      {props.children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
