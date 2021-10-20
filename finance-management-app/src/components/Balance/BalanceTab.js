import React, { useContext } from "react";
import { Container, Grid } from "semantic-ui-react";
import BalanceContext from "../store/balance-context";
import Balance from "./Balance";
import BalanceTable from "./BalanceTable";

import styles from "./BalanceTab.module.css";

const BalanceTab = (props) => {
  // const expensesItems = props.items.filter(
  //   (item) => item.action === "expenses"
  // );
  // const incomesItems = props.items.filter((item) => item.action === "incomes");
  const balanceCtx = useContext(BalanceContext);

  const incomeItems = balanceCtx.incomesItems;
  // console.log(incomeItems);
  const expenseItems = balanceCtx.expensesItems;
  // console.log(expenseItems);

  return (
    <section id="balance-tab-section">
      <Container>
        <Grid centered columns={2}>
          <Grid.Column textAlign="center">
            <Balance />
          </Grid.Column>

          <Grid.Row centered columns={2}>
            <Grid.Column textAlign="center" className={styles["green-table"]}>
              <BalanceTable items={incomeItems} tableColor="green" />
            </Grid.Column>
            <Grid.Column textAlign="center" className={styles["red-table"]}>
              <BalanceTable items={expenseItems} tableColor="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </section>
  );
};

export default BalanceTab;
