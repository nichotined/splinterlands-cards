import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export default class MenuComponent extends Component {
  render() {
    return (
      <Menu>
        <Link passHref={true} href="/" color="inherit" underline="none">
          <Menu.Item name="home" />
        </Link>
        <Link passHref={true} href="/history" color="inherit" underline="none">
          <Menu.Item name="history" />
        </Link>
        <Link passHref={true} href="/search" color="inherit" underline="none">
          <Menu.Item name="search" />
        </Link>
      </Menu>
    );
  }
}
