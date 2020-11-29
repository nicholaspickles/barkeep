import React from "react";
import { useHistory } from "react-router-dom";

import { Row, Col } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { GeneralHeader, LandingButton } from "../styles";
import landingFlower from "../localImages/flowa-01.png";

const Landing = () => {
  const history = useHistory();

  const handleShop = () => {
    history.push("/products");
  };
  return (
    <div>
      <Row>
        <Col span={12} style={{ marginTop: "2%" }}>
          <h1
            style={{
              textAlign: "center",
              maxHeight: "650px",
              height: "auto",
              width: "auto",
            }}
          >
            <img
              src={landingFlower}
              style={{ maxHeight: "650px", height: "auto", width: "auto" }}
            />
          </h1>
        </Col>
        <Col span={12} style={{ backgroundColor: "#AAA1ED" }}>
          <GeneralHeader style={{ marginTop: "20%" }}>
            Elegant cocktails. $12.
          </GeneralHeader>
          <div style={{ textAlign: "center" }}>
            <LandingButton type="default" onClick={handleShop}>
              Start Shopping &nbsp; <RightOutlined />
            </LandingButton>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
