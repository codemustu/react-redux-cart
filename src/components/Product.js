const Product = (props) => {
  return (
    <div className="product-wrapper">
      <div className="img-wrapper item">
        <img alt="" src={props.image} />
      </div>
      <div className="text-wrapper item">
        <span>{props.title}</span>
      </div>
      <div className="btn-wrapper item">
        <div className="price-wrapper">
          <span>Price: Rs.{props.price}</span>
        </div>
        <div>
          <button
            onClick={() =>
              props.addToCartHandler({ name: props.title, price: props.price })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
