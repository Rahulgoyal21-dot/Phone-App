import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Home, Cart } from "grommet-icons";
import { Text, Box } from "grommet";
import { ButtonContainer } from "../styled_components/Button";

export default class NavBar extends Component {
  render() {
    return (
      <Box direction="row" justify="between" gap="large" background="#009ffd">
        <Box direction="row" gap="medium" margin={{ left: "large" }}>
          <Link to="/">
            <ButtonContainer icon={<Home color="plain" size="medium" />} />
          </Link>
          <Box margin={{ top: "13px" }}>
            <Link to="/">
              <Text color="black">Products</Text>
            </Link>
          </Box>
        </Box>
        <Box margin={{ top: "xsmall", right: "large" }}>
          <Link to="/cart">
            <ButtonContainer
              icon={<Cart color="plain" size="medium" />}
              label="My Cart"
            />
          </Link>
        </Box>
      </Box>
    );
  }
}
