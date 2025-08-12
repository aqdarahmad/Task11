import React from "react";
import "./buttonsstyle.css";

export default function QuantityButtons({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="quantity-container">
      <button className="quantity-btn decrement" onClick={onDecrease}>-</button>
      <span className="quantity-value">{quantity}</span>
      <button className="quantity-btn increment" onClick={onIncrease}>+</button>
    </div>
  );
}
