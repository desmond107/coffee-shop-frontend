import { useContext } from "react";

import Modal from "../UI/Modal";
import Button from "../UI/Button";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `KSH${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const handleClick = async () => {
    if (!props.user) {
      alert("Please login to order");
      props.onHideCart();
      return;
    }
    const user_id = props.user.id;
    function itemName() {
      const order = cartCtx.items.map((item) => item.name);
      return order;
    }
    const response = await fetch("http://127.0.0.1:9292/orders", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        amount: cartCtx.totalAmount,
        user_id: user_id,
        order: itemName(),
      }),
    });
    const data = await response.json();
    if (data) {
      if (data.message) return alert(data.message)
      alert(`Your order was successful, pay: Ksh. ${cartCtx.totalAmount}`);
      for (let item = 0; item < cartCtx.items.length; item++) {
        cartItemRemoveHandler(cartCtx.items[item].id);
      }
      props.onHideCart()
    }
    
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <Button className="cart-btn-close" onClick={props.onHideCart}>
          Close
        </Button>

        {hasItems && (
          <Button className="cart-btn" onClick={handleClick}>
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
