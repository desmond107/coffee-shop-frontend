import React, { useState, useEffect } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Login from "./components/Login";
import Register from "./components/Register";
import AddCoffee from "./components/AddCoffee";
import Account from "./components/Account";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCoffee, setShowCoffee] = useState(false);
  const [showAccount, setAccount] = useState(false);
  const [meals, setMeals] = useState([]);
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  const [orders, setOrders] = useState([]);

  async function getUserOrders() {
    const user_id = user.id;
    const response = await fetch(
      `http://127.0.0.1:9292/users/${user_id}/orders`
    );
    const data = await response.json();
    if (data) {
      if (data.message) return alert(data.message);
      setOrders(data.orders);
      console.log(data.orders);
    } else {
      alert("Check you internet connection.");
    }
  }
  useEffect(() => {
    user && getUserOrders();
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  async function getCoffees() {
    const response = await fetch("http://127.0.0.1:9292/coffees");
    const data = await response.json();
    setMeals(data);
  }

  useEffect(() => {
    getCoffees();
  }, []);

  function logOut() {
    localStorage.removeItem("user");
    setUser(null);
  }

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showLoginForm = () => {
    setShowLogin((showLogin) => !showLogin);
  };

  const showRegisterForm = () => {
    setShowRegister((showRegister) => !showRegister);
  };

  const showCoffeeForm = () => {
    setShowCoffee((showCoffee) => !showCoffee);
  };
  function showAccountPage() {
    setAccount((showAccount) => !showAccount);
  }

  return (
    <CartProvider>
      {showCoffee && (
        <AddCoffee
          onClick={showCoffeeForm}
          meals={meals}
          addCoffee={setMeals}
        />
      )}
      {showRegister && (
        <Register onClick={showRegisterForm} setUser={setUser} />
      )}
      {showAccount && (
        <Account user={user} orders={orders} onClick={showAccountPage} />
      )}
      {showLogin && <Login setUser={setUser} onClick={showLoginForm} />}
      {cartIsShown && <Cart onHideCart={hideCartHandler} user={user} />}
      <Header
        onShowCart={showCartHandler}
        toggleForm={showLoginForm}
        toggleRegisterForm={showRegisterForm}
        toggleCoffeeForm={showCoffeeForm}
        toggleAccount={showAccountPage}
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
