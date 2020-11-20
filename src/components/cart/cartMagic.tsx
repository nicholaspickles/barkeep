import React from "react";

import {ApplicationState} from '../../redux/store';
import {useSelector} from 'react-redux';

const CartContent = () => {
  const ordered = useSelector((state:ApplicationState) => state.cart.itemsInCart);
  return (
    <div>
      <h1>Cart Content Goes here</h1>
      {ordered.map(order => <div>{order.image}</div>)}
    </div>
  );
};

export default CartContent;
