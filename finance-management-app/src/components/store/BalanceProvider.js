import { useReducer } from 'react';
import BalanceContext from './balance-context';

const initialState = {
	incomeItems: [],
	expenseItems: [],
	totalAmount: 0,
	totalIncomeAmount: 0,
	totalExpenseAmount: 0,
};

const reducer = (state, action) => {
	let updatedIncomeAmount;
	let updatedExpenseAmount;
	let updatedTotalAmount;
	let updatedIncomeItems;
	let updatedExpenseItems;

	if (action.item.action === 'incomes' && action.type === 'ADD') {
		updatedIncomeAmount = state.totalIncomeAmount + action.item.amount;
		updatedTotalAmount = state.totalAmount + action.item.amount;
		updatedIncomeItems = state.items.concat(action.item);
	}
	if (action.item.action === 'expenses' && action.type === 'ADD') {
		updatedExpenseAmount = state.totalExpenseAmount + action.item.amount;
		updatedTotalAmount = state.totalAmount - action.item.amount;
		updatedExpenseItems = state.items.concat(action.type);
	}

	return {
		incomeItems: updatedIncomeItems,
		expenseItems: updatedExpenseItems,
		totalAmount: updatedTotalAmount,
		totalIncomeAmount: updatedIncomeAmount,
		totalExpenseAmount: updatedExpenseAmount,
	};
};

const BalanceProvider = props => {
	const [itemsState, dispatchItemsState] = useReducer(reducer, initialState);

	const removeItemHandler = id => {
		return;
	};

	const addItemHandler = item => {
		dispatchItemsState({
			type: 'ADD',
			item: item,
		});
	};

	const balanceContext = {
		totalBalance: itemsState.totalAmount,
		expensesItems: itemsState.expenseItems,
		incomesItems: itemsState.incomeItems,
		totalExpensesAmount: itemsState.totalExpenseAmount,
		totalIncomesAmount: itemsState.totalIncomeAmount,
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
