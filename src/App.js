import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Login";
import Register from "./components/Register";
import AddCoffee from "./components/AddCoffee";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCoffee, setShowCoffee] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
   

   const showLoginForm = () => {
     setShowLogin(showLogin => !showLogin);
   };
  
    const showRegisterForm = () => {
      setShowRegister((showRegister) => !showRegister);
    };
  
  const showCoffeeForm = () => {
    setShowCoffee((showCoffee) => !showCoffee);
  };

  return (
    <CartProvider>
      {showCoffee && <AddCoffee onClick={showCoffeeForm} />}
      {showRegister && <Register onClick={showRegisterForm} />}
      {showLogin && <Login onClick={showLoginForm} />}
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header
        onShowCart={showCartHandler}
        toggleForm={showLoginForm}
        toggleRegisterForm={showRegisterForm}
        toggleCoffeeForm={showCoffeeForm}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
