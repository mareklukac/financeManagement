import React, { useContext } from "react";

import { Grid } from "semantic-ui-react";
import BalanceContext from "../store/balance-context";

import styles from "./Balance.module.css";

const Balance = () => {
  const balanceCtx = useContext(BalanceContext);
  return (
    <div className={styles.balance}>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h1>Balance</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div className={styles["balance-number"]}>
              <span className={styles["balance-number-num"]}>
                {balanceCtx.totalBalance}
              </span>
              <span className={styles["balance-number-currencies"]}>EUR</span>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Balance;
