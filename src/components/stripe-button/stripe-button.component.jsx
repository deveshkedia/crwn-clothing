import StripeCheckout from "react-stripe-checkout";
import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K55oSSERYzbDbRX1wDXNJn1JVwWrkkswRFr1Jh4LSoS4UDdejk7dTDGnj8khgm4dJo92dpih31J8udEr6i3SH3O00OEO0ZRKT";

  const onToken = (token) => {
    console.log(token);
    alert("Successful Payment");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      shippingAddress
      billingAddress
      discription={`${price}`}
      image="https://svgshare.com/i/CUz.svg"
      amount={priceForStripe}
      panelLabel="Pay Now"
      name="CRWN Clothing Ltd."
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
