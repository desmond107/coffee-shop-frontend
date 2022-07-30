import React, { Fragment } from "react";

import MealsBanner from "./MealsBanner";
import AvailableMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsBanner />
      <AvailableMeals meals={props.meals} />
    </Fragment>
  );
};

export default Meals;
