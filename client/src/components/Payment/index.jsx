import React from "react";
import ReactDOM from "react-dom";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearCart } from "../../store/slices/cart";

const Payment = () => {
  const subTotal = useSelector((state) => state.cart.subTotal);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: Math.ceil(subTotal),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    Swal.fire({
      icon: "success",
      title: "your payment was successful",
      text: "Continue Shipping!",
    }).then(() => {
      dispatch(clearCart());
      // navigate("/profile");
    });
  };

  return (
    <center>
      <div className="mt-20 border-transparent">
        <PayPalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </center>
  );
};

export default Payment;
