import React from "react";
import CustomButton from "../custom-button/custom-button.component";
// import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";

const CartDropdown = (cartItems) => (
  <div className="cart-dropdown">
    <div className="cart-items" />

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// const mapStateToProps = (state) => ({
//   cartItems: state.cartItems,
// });
// export default connect(mapStateToProps, null)(CartDropdown);
export default CartDropdown;
