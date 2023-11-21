import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({ cartItems: state.cartReducer.cartItems });

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (item) => dispatch(addToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
