import React from "react";

import { Grid } from "semantic-ui-react";

import styles from "./Balance.module.css";

const Balance = () => {
  return (
    <section className={styles.balance}>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <h1>Balance</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <div className={styles["balance-number"]}>
              <span className={styles["balance-number-num"]}>11 256,96</span>
              <span className={styles["balance-number-currencies"]}>EUR</span>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </section>
  );
};

export default Balance;
