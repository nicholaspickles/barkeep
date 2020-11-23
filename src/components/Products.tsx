import React from "react";
import { Card, Tabs } from "antd";

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

export const sampleData = [
  {
    id: 0,
    name: "first drink",
  },
  {
    id: 1,
    name: "second drink",
  },
];
export const sampleData2 = [
    {
      id: 0,
      name: "Monkey",
    },
    {
      id: 1,
      name: "monkey 2",
    },
  ];
  export const sampleData3 = [
    {
      id: 0,
      name: "silent",
    },
    {
      id: 1,
      name: "silent 2",
    },
  ];

const DisplayDrinks = ({ drinkList }) => {
  return (
    <Card>
      {drinkList.map((drink) => (
        <Card.Grid style={{ width: "25%", textAlign: "center" }}>
          {drink.name}
        </Card.Grid>
      ))}
    </Card>
  );
};
const Product = () => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: ApplicationState) => state.cart.itemsInCart
  );
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
  return (
    <div>
      <Tabs defaultActiveKey="1" centered style={{ marginTop: "3%" }}>
        <TabPane tab="All" key="1">
          <DisplayDrinks drinkList={sampleData} />
        </TabPane>
        <TabPane tab="Cocktails" key="2">
            <DisplayDrinks drinkList={sampleData2} />
        </TabPane>
        <TabPane tab="Non-alcoholic" key="3">
            <DisplayDrinks drinkList={sampleData3} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Product;

      {/* <h1>PRODUCT PAGE</h1>
            <button onClick={handleClick1}>Add to Cart</button>
            <button onClick={handleClick2}>Add other to Cart</button>
            <div>
                {DrinkData.map(drink => <div>
                    <p>a drink</p>
                    <img src={drink.image_1} />
                </div>)}
            </div> */}