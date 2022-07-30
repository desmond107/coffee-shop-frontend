import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function Account(props) {
  const [orders, setOrders] = useState([]);

//   useEffect(() => getUserOrders(), []);

//   async function getUserOrders() {
//     const user_id = props.user.id;
//     const response = await fetch(
//       `http://127.0.0.1:9292/users/${user_id}/orders`
//     );
//     const data = await response.json();
//     if (data) {
//       if (data.message) return alert(data.message);
//       setOrders(data);
//       props.onClick();
//     } else {
//       alert("Check you internet connection.");
//     }
//   }
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
        >
          <div style={{ marginTop: "20px" }}>Your Account</div>
          <div
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <h3>Email: {props.user.email}</h3>
          </div>
        </form>
        <div style={{ marginTop: "20px" }}>Your Orders</div>
        <div>
          {orders.map((order) => (
            <h3>{order.amount}</h3>
          ))}
        </div>
      </div>
    </Modal>
  );
}
