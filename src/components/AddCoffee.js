import React, {useState} from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export default function AddCoffee(props) {
  const [coffee, setCoffee] = useState({
    name: "",
    price: "",
    description: "",
  });
  function handleCoffeeChange(e) {
    const { name, value } = e.target;
    setCoffee({
      ...coffee,
      [name]: value,
    });
  }

    function handleSubmit(e) {
        e.preventDefault()
        if(coffee.name ==="" || coffee.price === "" || coffee.description === "") return
        const newCoffee = {
            ...coffee,
            price: parseInt(coffee.price),
            id: "id" + props.meals.length
        }
        props.addCoffee([...props.meals, newCoffee]);
        props.onClick()
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
          <div style={{ marginTop: "20px" }}>Add Coffee</div>
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Coffee Name"
            name="name"
            value={coffee.name}
            onChange={handleCoffeeChange}
          />
          <input
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            type="number"
            placeholder="Price"
            name="price"
            value={coffee.price}
            onChange={handleCoffeeChange}
          />
          <textarea
            style={{
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            placeholder="Description"
            name="description"
            value={coffee.description}
            onChange={handleCoffeeChange}
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
