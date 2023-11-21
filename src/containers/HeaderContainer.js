import { connect } from "react-redux";
import Header from "../components/Header";
import { removeFromCart } from "../Services/Actions/actions";

const mapStateToProps = (state) => ({ cartItems: state.cartReducer.cartItems });

const mapDispatchToProps = (dispatch) => ({
  removeFromCartHandler: (item) => dispatch(removeFromCart(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
