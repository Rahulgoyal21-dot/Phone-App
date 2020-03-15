import React, { Component } from "react";
import { Box } from "grommet";
import { Title } from "./Title";
import { ProductConsumer } from "../context";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title=" products" />
            <div className="row">
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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
