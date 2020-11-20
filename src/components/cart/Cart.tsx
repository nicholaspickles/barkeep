import React, { useState } from "react";
import { Badge, Button, Drawer } from "antd";
import CartContent from './cartMagic';

import { ApplicationState } from "../../redux/store";
import { useSelector } from "react-redux";

import { ShoppingCartOutlined, RightOutlined } from "@ant-design/icons";

const CartDrawer = () => {
  const numInCart = useSelector(
    (state: ApplicationState) => state.cart.numInCart
  );
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Badge count={numInCart} style={{backgroundColor:'#3E3F5A', color:'white', boxShadow: '0 0 1px #d9d9d9 inset'}}>
        <Button type="text" size="small" onClick={showDrawer}>
          <ShoppingCartOutlined style={{ fontSize: "140%", color: "black"}} />
        </Button>
        <Drawer
          title="Your Cart"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={onClose} style={{ marginRight: 8 }}>
                Close
              </Button>
              <Button onClick={onClose} type="primary">
                Checkout &nbsp; <RightOutlined />
              </Button>
            </div>
          }
        >
          <CartContent />
        </Drawer>
      </Badge>
    </>
  );
};

export default CartDrawer;
