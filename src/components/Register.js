import React, { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function Register(props) {
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (registerData.email === "" || registerData.password === "") {
      alert("Please fill in all fields");
      return;
    }
    localStorage.setItem("user", JSON.stringify(registerData));
    await props.setUser(JSON.parse(localStorage.getItem("user")));
    props.onClick();
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
          <div style={{ marginTop: "20px" }}>Register</div>
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="email"
            placeholder="Email"
            name="email"
            value={registerData.email}
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
            value={registerData.password}
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
