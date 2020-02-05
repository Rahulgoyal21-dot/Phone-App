import React, { Component } from "react";
import { Box } from "grommet";
import { Title } from "./Title";
import { ProductConsumer } from "../context";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Box>
          <Title name="Our" title="Products" />
          <ProductConsumer>
            {value => {
              return (
                <h1>
                  {value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  })}
                </h1>
              );
            }}
          </ProductConsumer>
        </Box>
      </React.Fragment>
    );
  }
}
