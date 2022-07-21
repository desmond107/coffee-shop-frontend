import React, { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton"
import mealsBanner from "../../assets/cofe1.jpeg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Coffee-Jive</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes.mainImage}>
        <img src={mealsBanner} alt="Order your hot coffee" />
      </div>
    </Fragment>
  );
};

export default Header;
