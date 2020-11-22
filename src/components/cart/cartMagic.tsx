import React from "react";

import { ApplicationState } from "../../redux/store";
import { ItemDetails } from "../../redux/ducks/cart";
import { useSelector } from "react-redux";
import { findAllByDisplayValue } from "@testing-library/react";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import { createEntry } from '../Products';
import {DrinkData} from '../../shared/products';
import create from "@ant-design/icons/lib/components/IconFont";

const CartContent = () => {
  const ordered = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
  //TODO: compile all the items in ordered and adjust quantities
  const handleClick = () => {
    var finalArr: Array<ItemDetails> = [];
    var idArrays = ordered.map((x) => x.id);
    var orderBank = {};
    for (let i of idArrays) {
      if (i in orderBank) {
        orderBank[i] += 1;
      } else {
        orderBank[i] = 1;
      }
    }
    for (const [key,value] of Object.entries(orderBank)) {
      var curr = DrinkData[key];
      // console.log("curr", curr)
      finalArr.push(createEntry({id:{key}, quantity:{value}, image:DrinkData[key].image, name:DrinkData[key].name}));
    }
    console.log(finalArr);
  };
  return (
    <div>
      {ordered.length > 0 ? (
        ordered.map((order) => (
          <div>
            {order.quantity} x {order.name}
          </div>
        ))
      ) : (
        <div>Cart is empty</div>
      )}
      <button onClick={handleClick}>Checker</button>

    </div>
  );
};

export default CartContent;
