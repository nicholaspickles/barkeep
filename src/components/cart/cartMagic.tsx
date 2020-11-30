import React from "react";

import { MiniImg, RemoveButton } from "../../styles";
import { Row, Col } from "antd";

//REDUX
import { ApplicationState } from "../../redux/store";
import { ItemDetails, removeCartItems } from "../../redux/ducks/cart";
import { useSelector, useDispatch } from "react-redux";
import { createEntry } from "../products/Products";
import { DrinkData } from "../../shared/products";

const CartContent = () => {
  const dispatch = useDispatch();
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
        price: DrinkData[key].price,
      })
    );
  }

  const handleRemoveItem = (id) => {
    dispatch(removeCartItems(id));
  };

  return (
    <div>
      {finalArr.length > 0 ? (
        finalArr.map((order) => (
          <Row>
            <Col flex={1}>
              <MiniImg src={order.image} />
            </Col>
            <Col flex={2}>
              <Row>
                {order.quantity} x {order.name}
              </Row>
              <Row>
                <p style={{ float: "right" }}>${order.price}</p>
              </Row>
            </Col>
            <Col flex={1}>
              <RemoveButton
                size={"small"}
                onClick={() => handleRemoveItem(order.id)}
              >
                Remove
              </RemoveButton>
            </Col>
          </Row>
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
};

export default CartContent;
