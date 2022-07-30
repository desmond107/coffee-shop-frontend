import React, { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function Login(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      alert("Please fill in all fields");
      return;
    }
    const response = await fetch(
      "https://coffee-api-sinatra.herokuapp.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(loginData),
      }
    );
    const data = await response.json();
    if (data) {
      if (data.message) return alert(data.message);
      localStorage.setItem("user", JSON.stringify(data.user));
      await props.setUser(JSON.parse(localStorage.getItem("user")));
      props.onClick();
    } else {
      alert("Check you internet connection.");
    }
  }
  return (
    <Modal>
      <Button className="cart-btn-close" onClick={props.onClick}>
        Close
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginTop: "20px" }}>Login</div>
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="email"
            placeholder="Email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            validate
          />
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="password"
            placeholder="********"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </Modal>
  );
}
