import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class HeaderMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted borderless size="huge">
        <Menu.Item header>Finance Management</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="aboutUs"
            active={activeItem === "aboutUs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="jobs"
            active={activeItem === "jobs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="locations"
            active={activeItem === "locations"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
