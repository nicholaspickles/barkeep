import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Tabs, Row, Col, Button, message } from "antd";
import "antd/dist/antd.css";
import { AddToCart } from "../../styles";

import { ApplicationState } from "../../redux/store";
import {
  addCartItems,
  ItemDetails,
  removeCartItems,
  setCartVisibility,
} from "../../redux/ducks/cart";
import { useDispatch, useSelector } from "react-redux";

import { DrinkData } from "../../shared/products";
import noImage from "../../localImages/noImage.png";

export function createEntry(
  item: ItemDetails
): { id: number; quantity: number; image: any; name: string; price: number } {
  let newEntry = {
    id: 0,
    quantity: 1,
    name: "default name",
    image: noImage,
    price: 0,
  };
  if (item.id) {
    newEntry.id = item.id;
  }
  if (item.quantity) {
    newEntry.quantity = item.quantity;
  }
  if (item.image) {
    newEntry.image = item.image;
  }
  if (item.name) {
    newEntry.name = item.name;
  }
  if (item.price) {
    newEntry.price = item.price;
  }
  return newEntry;
}
const { TabPane } = Tabs;

const cocktails = DrinkData.filter((drink) => drink.type === "cocktail");
const nonAl = DrinkData.filter((drink) => drink.type === "non-alcoholic");

const DisplayDrinks = ({ drinkList }) => {
  const [alerted, setAlerted] = useState("no");
  const dispatch = useDispatch();
  const handleAdd = (drinkId) => {
    const drink = DrinkData[drinkId];
    const { _id, name, image, price } = drink;
    const order = createEntry({
      id: _id,
      quantity: 1,
      image: image,
      name: name,
      price: price,
    });
    dispatch(addCartItems(order));
    if (alerted === "no") {
      setAlerted("yes");
      dispatch(setCartVisibility(true));
    } else {
      message.success({
        content: `${order.quantity} x ${order.name} has been added to your bag.`,
        duration: 0.8,
        style: {
          marginTop: "40px",
        },
      });
    }
  };

  return (
    <div style={{ marginBottom: "3%" }}>
      <Row gutter={16}>
        {drinkList.map((drink) => (
          <Col xs={12} xl={8}>
            <Card
              hoverable
              bordered={false}
              style={{
                marginLeft: "9%",
                marginTop: "5%",
                textAlign: "center",
                width: "80%",
                height: "auto",
              }}
            >
              <Link to={`/products/${drink._id}`} style={{ color: "black" }}>
                <img
                  src={drink.image}
                  style={{ maxHeight: 200, maxWidth: 200, marginBottom: 5 }}
                />
                <br />
                {drink.name}
                <br />${drink.price}
                <br />
              </Link>
              <AddToCart type="primary" onClick={() => handleAdd(drink._id)}>
                Add to Bag
              </AddToCart>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Product = () => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );

  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        centered
        style={{ marginTop: "2%", marginRight: "10%", marginLeft: "10%" }}
      >
        <TabPane tab="All" key="1">
          <DisplayDrinks drinkList={DrinkData} />
        </TabPane>
        <TabPane tab="Cocktails" key="2">
          <DisplayDrinks drinkList={cocktails} />
        </TabPane>
        <TabPane tab="Non-alcoholic" key="3">
          <DisplayDrinks drinkList={nonAl} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Product;
