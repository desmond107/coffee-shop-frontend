import React from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function Login(props) {
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
          <div style={{ marginTop: "20px" }}>Add Coffee</div>
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Name"
          />
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="number"
            placeholder="Price"
          />
          <textarea
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            placeholder="Description"
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
