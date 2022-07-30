import React from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function Account(props) {

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "2px" }}>Your Account</div>
          <div
            style={{
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <h3>Email: {props.user.email}</h3>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>Your Orders</div>
        <div>
          {props.orders.map((order) => (
            <div style={{border: "1px solid orange",padding: "10px", borderRadius: "10px"}}>
                  <h3>Amount: {order.amount}</h3>
                  <div>Items: {order.order.map(item => <ul><li>{item}</li></ul>)}</div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
