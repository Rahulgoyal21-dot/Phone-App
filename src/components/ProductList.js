import React, { Component, Fragment } from "react";
import Product from "./Product";
import { Box } from "grommet";
import { Title } from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <Box>
          <Title name="Our" title="Products" />
          <ProductConsumer>
            {hello => {
              return <h1>{hello}</h1>;
            }}
          </ProductConsumer>
        </Box>
      </React.Fragment>
    );
  }
}
