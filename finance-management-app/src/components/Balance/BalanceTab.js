import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import BalanceContext from "../store/balance-context";
import Balance from "./Balance";
import BalanceTable from "./BalanceTable";

const BalanceTab = (props) => {
  // const expensesItems = props.items.filter(
  //   (item) => item.action === "expenses"
  // );
  // const incomesItems = props.items.filter((item) => item.action === "incomes");
  const balanceCtx = useContext(BalanceContext);

  const incomeItems = balanceCtx.incomesItems;
  const expenseItems = balanceCtx.expensesItems;

  return (
    <section>
      <Container>
        <Grid centered columns={2}>
          <Grid.Column textAlign="center">
            <Balance />
          </Grid.Column>
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign="center">
              <BalanceTable color="green" items={incomeItems} />
            </Grid.Column>
            <Grid.Column textAlign="center">
              <BalanceTable color="red" items={expenseItems} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
};

export default BalanceTab;
