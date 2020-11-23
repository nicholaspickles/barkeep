import React from "react";
import { Card, Tabs, Row, Col } from "antd";
import "antd/dist/antd.css";

import { ApplicationState } from "../redux/store";
import {
  addCartItems,
  ItemDetails,
  removeCartItems,
} from "../redux/ducks/cart";
import { useDispatch, useSelector } from "react-redux";

import { DrinkData } from "../shared/products";
import noImage from "../localImages/noImage.png";

export function createEntry(
  item: ItemDetails
): { id: number; quantity: number; image: any; name: string } {
  let newEntry = { id: 1, quantity: 1, name: "default name", image: noImage };
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
  return newEntry;
}
const { TabPane } = Tabs;

const cocktails = DrinkData.map((drink) => {

})
const DisplayDrinks = ({ drinkList }) => {
  return (
    <Row gutter={16}>
      {drinkList.map((drink) => (
        <Col span={8}>
          <Card hoverable bordered={false} style={{ marginLeft:"9%", marginTop: "5%", textAlign:'center', width:'80%' }}>
            <img src={drink.image} style={{maxHeight:200, maxWidth:200}} />
            <br />
            {drink.name}
            <br />
            {drink.price}
          </Card>
        </Col>
      ))}
    </Row>
  );
};
const Product = () => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );

  return (
    <div>
      <Tabs defaultActiveKey="1" centered style={{ marginTop: "3%" }}>
        <TabPane tab="All" key="1">
          <DisplayDrinks drinkList={DrinkData} />
        </TabPane>
        {/* <TabPane tab="Cocktails" key="2">
          <DisplayDrinks drinkList={sampleData2} />
        </TabPane>
        <TabPane tab="Non-alcoholic" key="3">
          <DisplayDrinks drinkList={sampleData3} />
        </TabPane> */}
      </Tabs>
    </div>
  );
};

export default Product;

{
  /* <h1>PRODUCT PAGE</h1>
            <button onClick={handleClick1}>Add to Cart</button>
            <button onClick={handleClick2}>Add other to Cart</button>
            <div>
                {DrinkData.map(drink => <div>
                    <p>a drink</p>
                    <img src={drink.image_1} />
                </div>)}
            </div> */
}

 //   const handleClick1 = () => {
  //     const order = createEntry({
  //       id: 1,
  //       quantity: 1,
  //       image: "imageLocation",
  //       name: "silent poolz",
  //     });
  //     dispatch(addCartItems(order));
  //   };
  //   const handleClick2 = () => {
  //     const order = createEntry({
  //       id: 3,
  //       quantity: 1,
  //       image: "imageLocation",
  //       name: "monkey shoulder",
  //     });
  //     dispatch(addCartItems(order));
  //   };
