import React from "react";

import {ApplicationState} from '../../redux/store';
import {ItemDetails} from '../../redux/ducks/cart';
import {useSelector} from 'react-redux';
import { findAllByDisplayValue } from "@testing-library/react";

const CartContent = () => {
  const ordered = useSelector((state:ApplicationState) => state.cart.itemsInCart);
  //TODO: compile all the items in ordered and adjust quantities
  const handleClick = () => {
    var finalArr: Array<ItemDetails> = [];
    var idArrays:number[] = [];
    for (let i of ordered){
      
    }
    console.log(finalArr);
  }
  return (
    <div>
      {/* {ordered.map(order => <div key={order.id}>{order.name}</div>)} */}
      <button onClick={handleClick}>clk</button>
    </div>
  );
};

export default CartContent;
