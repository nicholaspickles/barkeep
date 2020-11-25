import React, { useState } from "react";

import { Button, Form, Select } from "antd";

import { GeneralHeader, GeneralWrapper } from "../../styles";

const TransformLiquorForm = () => {
  const [form] = Form.useForm();
  const [order, setOrder] = useState({
      spiritType: "",
      infusers: []
  });

  const onFinish = () => {
      alert(JSON.stringify(order));
  }
  const onFinishFailed = () => {
    alert(JSON.stringify(order));
}

    const handleChange = (type, e) => {
        setOrder((prevState) => ({
            ...prevState,
            [type]: e
        }))
    }

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
            onChange={(e) => handleChange("spiritType", e)}
          >
            <Select.Option value="gin">Gin</Select.Option>
            <Select.Option value="vodka">Vodka</Select.Option>
            <Select.Option value="whisky">Whisky</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
      </Form>
    </GeneralWrapper>
  );
};

export default TransformLiquorForm;
