import React from "react";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

//AESTHETICS IMPORT
import "antd/dist/antd.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import {HeaderLogo, TopRightIcons} from '../styles';


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
          <HeaderLogo to="/">B a r k e e p</HeaderLogo>
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
          <TopRightIcons>
            <a href="/cart">
              <ShoppingCartOutlined />
            </a>
          </TopRightIcons>
        </Header>
      </Layout>
    </div>
  );
};

export default Head;
