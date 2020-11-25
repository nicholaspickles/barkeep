import React, { useState } from "react";
import { Form, Input, InputNumber, Select, Button } from "antd";
import { GeneralWrapper, GeneralHeader } from "../../styles";
import { DrinkData } from "../../shared/products";

//REDUX
import { ApplicationState } from "../../redux/store";
import { useSelector, useDispatch, connect } from "react-redux";
import {
  updateConversionType,
  insertOrderDetails,
  ConversionDetails,
} from "../../redux/ducks/conversions";

const ConvertCocktailForm = () => {
  const [ttlVol, setTtlVol] = useState();
  const [order, setOrder] = useState({
    spirit: "",
    volumes: [],
    cocktail: [],
  });
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const cocktailList = (spirit) => {
    const cocktailList = DrinkData.filter((x) => x.spiritType === spirit);
    return cocktailList;
  };

  const handleChange = (type, e) => {
    setOrder((prevState) => ({ ...prevState, [type]: e }));
  };

  const vols = {};
  const handleChangeVolumes = (drinkSelected, e) => {
    vols[`${drinkSelected}`] = e;
  };

  const handleTotalVol = (e) => {
    setTtlVol(e);
  };

  const makeOrder = () => {
    const volList = [];
    for (let [key,value] of Object.entries(vols)){
      volList.push(`${key}: ${value}ml`);
    }
    setOrder((prevState) => ({
      ...prevState,
      volumes: [volList]
    }))
  }

  const onFinish = () => {
    makeOrder();
    alert(JSON.stringify(order));
  };
  const onFinishFailed = () => {
    console.log(order);
  };

  return (
    <GeneralWrapper>
      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item label="Spirit Type">
          <Select
            placeholder="Select spirit type"
            onChange={(e) => handleChange("spirit", e)}
          >
            <Select.Option value="gin">Gin</Select.Option>
            <Select.Option value="vodka">Vodka</Select.Option>
            <Select.Option value="whisky">Whisky</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Volume to convert (ml)">
          <InputNumber onChange={(e) => handleTotalVol} />
        </Form.Item>
        <Form.Item label="Cocktail">
          <Select
            mode="multiple"
            placeholder="Select cocktail"
            onChange={(e) => handleChange("cocktail", e)}
          >
            {cocktailList(order.spirit).map((x) => (
              <Select.Option value={x.name}>{x.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {order.cocktail.map((selected) => (
          <Form.Item label={selected}>
            <InputNumber
              key={selected}
              name={selected}
              style={{ width: "50%" }}
              formatter={(value) => `${value}ml`}
              parser={(value) => value.replace("ml", "")}
              onChange={(e) => handleChangeVolumes(selected, e)}
            />
          </Form.Item>
        ))}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </GeneralWrapper>
  );
};

export default ConvertCocktailForm;
