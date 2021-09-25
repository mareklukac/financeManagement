import React from "react";
import { Container, Grid } from "semantic-ui-react";
import Balance from "./Balance";
import BalanceTable from "./BalanceTable";

const BalanceTab = () => {
  return (
    <Container>
      <Grid centered columns={2}>
        <Grid.Column centered>
          <Balance />
        </Grid.Column>
        <Grid.Row centered columns={2}>
          <Grid.Column textAlign="center">
            <BalanceTable color="green" />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <BalanceTable color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default BalanceTab;
