import React from "react";
import "antd/dist/antd.css";

import { ShoppingCartOutlined } from "@ant-design/icons";

import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Header } = Layout;

const Head = () => {
  const centerStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div className="headerWrapper" style={{ textAlign: "center" }}>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <div className="logo">
            <NavLink to="/">B a r k e e p</NavLink>
          </div>
          <div className="menuItems">
            <Menu mode="horizontal" style={centerStyle}>
              <Menu.Item>
                <NavLink to="/products">PRODUCT</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/about">OUR STORY</NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to="/contact">CONTACT US</NavLink>
              </Menu.Item>
            </Menu>
          </div>
          <ShoppingCartOutlined />
          {/* <div className="sideIcons">
            <a href="/cart">
              <ShoppingCartOutlined />
            </a>
          </div> */}
        </Header>
      </Layout>
    </div>
  );
};

export default Head;
