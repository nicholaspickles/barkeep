import React from "react";
import { useHistory } from "react-router-dom";

import { GeneralWrapper, GeneralHeader } from "../../styles";
import { Button, Col, Row, Breadcrumb } from "antd";

import { ShopOutlined } from "@ant-design/icons";

import DescriptionCard from "./description";
import ProductImages from "./productImages";
import Product from "./Products";

const IndividualProduct = ({ product }) => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };

  return (
    <div>
      <Breadcrumb style={{ marginLeft: "2%", marginTop: "3%" }}>
        <Breadcrumb.Item onClick={handleBack}>
          <ShopOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col xs={24} xl={16}>
          <ProductImages product={product} />
        </Col>
        <Col xs={24} xl={8}>
          <DescriptionCard product={product} />
        </Col>
      </Row>
    </div>
  );
};

export default IndividualProduct;
