import React from "react";
import { Table } from "semantic-ui-react";

import styles from "./BalanceItem.module.css";

const BalanceItem = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{`${props.amount} €`}</Table.Cell>
      <Table.Cell>{props.date}</Table.Cell>
      <Table.Cell className={styles.balanceItem}>{props.about}</Table.Cell>
    </Table.Row>
  );
};

export default BalanceItem;
