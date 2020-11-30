import React from "react";

import { Button, Col, Row } from "antd";

const IndividualProduct = ({ product }) => {
  return (
    <div>
      <h1>Hello, {product.name}</h1>
    </div>
  );
};

export default IndividualProduct;
