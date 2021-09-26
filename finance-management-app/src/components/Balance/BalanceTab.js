import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Balance from "./Balance";
import BalanceTable from "./BalanceTable";

const BalanceTab = (props) => {
  const expensesItems = props.items.filter(
    (item) => item.action === "expenses"
  );
  const incomesItems = props.items.filter((item) => item.action === "incomes");
  return (
    <Container>
      <Grid centered columns={2}>
        <Grid.Column textAlign="center">
          <Balance />
        </Grid.Column>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="center">
            <BalanceTable color="green" items={incomesItems} />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <BalanceTable color="red" items={expensesItems} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BalanceTab;
