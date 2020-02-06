import React, { Component } from "react";
import { Box, Image } from "grommet";
export default class Product extends Component {
  render() {
    const { id, title, img, price, info, inCart, company } = this.props.product;
    return (
      <Box direction="row" wrap gap="medium" flex="grow">
        <Box basis="25%" minWidth="200px">
          <Image
            fit="contain"
            src={process.env.PUBLIC_URL + "img/product-1.png"}
          />
        </Box>
      </Box>
    );
  }
}

// const ProductWrapper = styled(Box)`
//   maxheight: medium;
//   overflow: auto;
// `;
