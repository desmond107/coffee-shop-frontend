import React, { useState, useEffect } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Login";
import Register from "./components/Register";
import AddCoffee from "./components/AddCoffee";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Classic Espresso ",
    description: "Strong...invigorating...",
    price: 100,
  },
  {
    id: "m2",
    name: "Americano",
    description: "Boald..strong...",
    price: 120,
  },
  {
    id: "m3",
    name: "Machiato",
    description: "Glossy...perfect!",
    price: 150,
  },
  {
    id: "m4",
    name: "House coffee",
    description: "Original..off..thecurb",
    price: 90,
  },
  {
    id: "m5",
    name: "Mocha",
    description: "Fine finish...",
    price: 220,
  },
];

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCoffee, setShowCoffee] = useState(false);
  const [meals, setMeals] = useState(DUMMY_MEALS);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user)
  }, []);

  function logOut() {
    localStorage.removeItem("user")
    setUser(null)
  }

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
      {showCoffee && (
        <AddCoffee
          onClick={showCoffeeForm}
          meals={meals}
          addCoffee={setMeals}
        />
      )}
      {showRegister && <Register onClick={showRegisterForm} />}
      {showLogin && <Login setUser={setUser} onClick={showLoginForm} />}
      {cartIsShown && <Cart onHideCart={hideCartHandler} user={user} />}
      <Header
        onShowCart={showCartHandler}
        toggleForm={showLoginForm}
        toggleRegisterForm={showRegisterForm}
        toggleCoffeeForm={showCoffeeForm}
        user={user}
        onLogOut={logOut}
      />
      <main>
        <Meals meals={meals} />
      </main>
    </CartProvider>
  );
}

export default App;
