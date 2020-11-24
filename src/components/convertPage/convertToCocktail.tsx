import React, { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { GeneralWrapper, GeneralHeader } from "../../styles";

const ConvertCocktailForm = () => {
  return (
    <GeneralWrapper>
      <Form layout="horizontal" labelCol={{span:4}} wrapperCol={{span:14}}>
        <Form.Item label="Spirit Type">
          <Select>
            <Select.Option value ="gin">Gin</Select.Option>
            <Select.Option value ="vodka">Vodka</Select.Option>
            <Select.Option value ="whisky">Whisky</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </GeneralWrapper>
  );
};

export default ConvertCocktailForm;
