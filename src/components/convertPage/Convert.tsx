import React from "react";

import { Tabs } from "antd";
import { GeneralWrapper, GeneralHeader } from "../../styles";

import ConvertCocktailForm from './convertToCocktail';
import TransformLiquorForm from './transformLiquor';

const { TabPane } = Tabs;

const Convert = () => {
  return (
    <GeneralWrapper>
      <GeneralHeader>Convert your bottle</GeneralHeader>
      <br />
      <Tabs defaultActiveKey="1" style = {{marginLeft:'10%', marginRight:'5%', marginBottom:'10%'}}>
        <TabPane tab="Convert to Cocktail" key="1">
          <ConvertCocktailForm />
        </TabPane>
        <TabPane tab="Transform Liquor" key="2">
          <TransformLiquorForm />
        </TabPane>
      </Tabs>
    </GeneralWrapper>
  );
};

export default Convert;
