import React from "react";
import { Layout, Menu, Badge } from "antd";
import { NavLink } from "react-router-dom";

//REDUX
import {ApplicationState} from '../redux/store';
import {useSelector} from 'react-redux';

//AESTHETICS IMPORT
import "antd/dist/antd.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { HeaderLogo, TopRightIcons } from "../styles";

const { Header } = Layout;

const Head = () => {
  const numInCart = useSelector((state:ApplicationState) => state.cart.numInCart);
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
                <NavLink to="/products">PRODUCTS</NavLink>
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
            <Badge count={numInCart}>
              <a href="/cart">
                <ShoppingCartOutlined style={{fontSize:"140%", color:"black"}}/>
              </a>
            </Badge>
          </TopRightIcons>
        </Header>
      </Layout>
    </div>
  );
};

export default Head;
