import React, { useContext } from "react";
import { Container } from "semantic-ui-react";
import DoughnutChart from "./DoughnutChart";
import BalanceContext from "../store/balance-context";

const ChartsTab = () => {
  const balanceCtx = useContext(BalanceContext);
  const incomeAmount = balanceCtx.totalIncomeAmount;
  const expenseAmount = balanceCtx.totalExpenseAmount;
  return (
    <section>
      <Container>
        <DoughnutChart
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
        />
        ;
      </Container>
    </section>
  );
};

export default ChartsTab;
