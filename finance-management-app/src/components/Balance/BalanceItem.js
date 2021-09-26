import React from "react";
import { Table } from "semantic-ui-react";

const BalanceItem = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.title}</Table.Cell>
      <Table.Cell>{props.amount}</Table.Cell>
      <Table.Cell>{props.date}</Table.Cell>
      <Table.Cell>{props.about}</Table.Cell>
    </Table.Row>
  );
};

export default BalanceItem;
