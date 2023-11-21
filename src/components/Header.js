import React from "react";

const Header = (props) => {
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.cartItems.length}</span>
        <img
          alt=""
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
        />
        <button
          className="emptyCart"
          onClick={() =>
            props.removeFromCartHandler({ name: "iphone10", price: 1000 })
          }
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default Header;
