import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Tabs, Row, Col, message } from "antd";
import "antd/dist/antd.css";
import { AddToCart, UnderlineP } from "../../styles";

import { addCartItems, setCartVisibility } from "../../redux/ducks/cart";
import { useDispatch } from "react-redux";

import { DrinkData } from "../../shared/products";
import { createEntry } from "../../shared/helperFunctions";

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
          <Col xs={12} xl={8} key={drink._id}>
            <Card
              hoverable
              bordered={false}
              style={{
                marginTop: "5%",
                textAlign: "center",
                width: "80%",
                height: "auto",
              }}
            >
              <Link to={`/products/${drink._id}`} style={{ color: "black" }}>
                <img
                  alt="Drankz"
                  src={drink.image}
                  style={{
                    maxHeight: "auto",
                    maxWidth: "100%",
                    marginBottom: 5,
                  }}
                />
                <br />
                <UnderlineP style={{ margin: "0", padding: "5px" }}>
                  {drink.name} <br /> ${drink.price}
                </UnderlineP>
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
