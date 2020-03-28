import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../styled_components/Button";
import { ProductConsumer } from "../context";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-2">
              {/*tile*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end tile*/}
              {/*product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>Model:{title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by:<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price:<span> $</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-muted lead">{info}</p>
                  <div className="row">
                    <Link to="/">
                      <ButtonContainer>Back To Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disableb={inCart ? true : false}
                      onClick={() => value.addToCart(id)}
                      cart
                    >
                      {inCart ? "In Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
