import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HtKRxDuqKCoB7xrFTn0lx7RNZNVMDrafz8B49HVyff0dU6EPmBHM1DMFYwefjWESICnc09FJZkTuCTMfPOd3YO800pMB187Cq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succcessful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="THE NICE GUY"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
