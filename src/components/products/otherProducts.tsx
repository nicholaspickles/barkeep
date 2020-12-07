import React from "react";
import { useHistory } from "react-router-dom";

import { Card } from "antd";
import { GeneralHeader } from "../../styles";

//REDUX
import { DrinkData } from "../../shared/products";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../redux/store";
import { visit, setAllVisited } from "../../redux/ducks/visitedProducts";

const OtherProducts = ({ featured }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const allVisited = useSelector(
    (state: ApplicationState) => state.visited.allVisited
  );
  const visited = useSelector(
    (state: ApplicationState) => state.visited.visitedArr
  );

  const OtherDrinks = () => {
    const notFeatured = DrinkData.filter((drink) => drink._id !== featured);
    var drinkArray = [];
    if (allVisited) {
      drinkArray.push(notFeatured.slice(0, 3));
    } else {
      for (var drinkId of notFeatured) {
        if (!(drinkId._id in visited)) {
          drinkArray.unshift(drinkId);
        }
        drinkArray.push(drinkId);
      }
      drinkArray = drinkArray.slice(0, 3);
    }
    return (
      <Card>
        {drinkArray.map((drink) => (
          <Card.Grid>{drink.name}</Card.Grid>
        ))}
      </Card>
    );
  };

  return (
    <div>
      <hr
        style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "10vh" }}
      />
      <GeneralHeader style={{ marginTop: "2vh" }}>
        check out some other products
      </GeneralHeader>
      <br />
      <OtherDrinks />
    </div>
  );
};

export default OtherProducts;
