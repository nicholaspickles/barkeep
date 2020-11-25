import React from "react";

import { MiniImg } from "../../styles";
import { Row, Col } from "antd";
import { ApplicationState } from "../../redux/store";
import { ItemDetails } from "../../redux/ducks/cart";
import { useSelector } from "react-redux";
import { createEntry } from "../Products";
import { DrinkData } from "../../shared/products";

const CartContent = () => {
  const ordered = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
  const finalArr: Array<ItemDetails> = [];
  var idArrays = ordered.map((x) => x.id);
  var orderBank = {};
  for (let i of idArrays) {
    if (i in orderBank) {
      orderBank[i] += 1;
    } else {
      orderBank[i] = 1;
    }
  }
  for (const [key, value] of Object.entries(orderBank)) {
    finalArr.push(
      createEntry({
        id: DrinkData[key]._id,
        quantity: value,
        image: DrinkData[key].image,
        name: DrinkData[key].name,
      })
    );
  }

  return (
    <div>
      {finalArr.length > 0 ? (
        finalArr.map((order) => (
          <Row>
            <div key={order.id}>
              <Col>
                <MiniImg src={order.image} /> &nbsp;{order.quantity} x {order.name}
              </Col>
            </div>
          </Row>
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default CartContent;
