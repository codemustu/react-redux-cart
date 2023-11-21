import React from "react";
import Product from "./Product";
import Products from "../products.json";

const Home = (props) => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="list-wrapper">
        {Products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addToCartHandler={props.addToCartHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
