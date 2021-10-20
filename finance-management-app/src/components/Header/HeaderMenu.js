import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import styles from "./HeaderMenu.module.css";

export default class HeaderMenu extends Component {
  state = {
    activeItem: "Balance",
  };

  handleItemClick = (e, { name }) => {
    this.this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted borderless size="huge" className={styles.sticky}>
        <Menu.Item header>Finance Management</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="Balance"
            active={activeItem === "Balance"}
            onClick={
              (this.handleItemClick,
              () => {
                document
                  .querySelector("#balance-tab-section")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              })
            }
          />
          <Menu.Item
            name="Add Item"
            active={activeItem === "Add Item"}
            onClick={
              (this.handleItemClick,
              () => {
                document
                  .querySelector("#form-tab-section")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              })
            }
          />
          <Menu.Item
            name="Infographic"
            active={activeItem === "Infographic"}
            onClick={
              (this.handleItemClick,
              () => {
                document
                  .querySelector("#charts-tab-section")
                  .scrollIntoView({ behavior: "smooth", block: "center" });
              })
            }
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
