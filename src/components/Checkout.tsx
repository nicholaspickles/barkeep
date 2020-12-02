import React from "react";

import { GeneralHeader } from "../styles";
import { makeNeat } from "../shared/helperFunctions";

//REDUX
import { ApplicationState } from "../redux/store";
import { useSelector } from "react-redux";

const Checkout = () => {
  const ordered = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
  const finalArr = makeNeat(ordered);

  return (
    <div>
      <GeneralHeader>Checkout</GeneralHeader>
      {finalArr.map((o) => (
        <p>
          {o.name}, {o.price}, {o.quantity}
        </p>
      ))}
    </div>
  );
};

export default Checkout;
