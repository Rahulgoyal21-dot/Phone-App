import React, { Component } from "react";
import styled from "styled-components";
import { Box, Image } from "grommet";
export default class Product extends Component {
  render() {
    const { id, title, img, price, info, inCart, company } = this.props.product;
    return (
      <ProductWrapper fill="horizontal" direction="row">
        <ProductWrapper
          alignSelf="center"
          justify-content="center"
          height="200px"
          width="200px"
        >
          <Image
            fit="contain"
            src={process.env.PUBLIC_URL + "img/product-1.png"}
          />
        </ProductWrapper>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled(Box)`
  maxheight: medium;
  overflow: auto;
`;
