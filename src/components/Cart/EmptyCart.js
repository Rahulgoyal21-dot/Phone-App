import React from "react";
import { Title } from "../Title";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row col-10 mx-auto text-center text-uppercase">
        <Title name="you cart is currently empty" />
      </div>
    </div>
  );
}
