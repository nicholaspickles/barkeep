import React, { useState } from "react";
import { Row, Col } from "antd";

import { SideImages } from "../../styles";

const ProductImages = ({ product }) => {
  const firstImage = product.image_1;
  const [bigImagePath, setBigImagePath] = useState(firstImage);

  const handleHover = (number) => {
    switch (number) {
      case "1":
        return setBigImagePath(product.image_1);
      case "2":
        return setBigImagePath(product.image_2);
      case "3":
        return setBigImagePath(product.image_3);
      default:
        setBigImagePath(product.image_1);
    }
  };

  const SideImages = () => {
    return (
      <div style={{ marginLeft: "25%", marginTop: "15%" }}>
        <Row gutter={[8, 16]}>
          <img
            onMouseEnter={() => handleHover("1")}
            src={product.image_1}
            style={{ height: "83px", width: "100px" }}
          />
        </Row>
        <Row gutter={[8, 16]} style={{ marginTop: "2%" }}>
          <img
            onMouseEnter={() => handleHover("2")}
            src={product.image_2}
            style={{ height: "83px", width: "100px" }}
          />
        </Row>
        <Row gutter={[8, 16]} style={{ marginTop: "2%" }}>
          <img
            onMouseEnter={() => handleHover("3")}
            src={product.image_3}
            style={{ height: "83px", width: "100px" }}
          />
        </Row>
      </div>
    );
  };

  return (
    <>
      <Row>
        <Col flex={2}>
          <SideImages />
        </Col>
        <Col flex={3}>
          <div style={{ height: "500px", width: "500px" }}>
            <img
              src={bigImagePath}
              style={{
                height: "500px",
                width: "auto",
                maxWidth: "700px",
                marginLeft: "20%",
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductImages;
