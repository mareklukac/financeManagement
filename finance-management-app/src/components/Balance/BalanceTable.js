import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import BalanceItem from "./BalanceItem";

const BalanceTable = (props) => {
  return (
    // <Container>
    <Table fixed inverted striped color={props.color} key={props.color}>
      <Table.Body>
        {props.items.map((item) => (
          <BalanceItem
            key={Math.random().toString()}
            title={item.title}
            amount={item.amount}
            action={item.action}
            date={item.date}
            about={item.about}
          />
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    // </Container>
  );
};

export default BalanceTable;
