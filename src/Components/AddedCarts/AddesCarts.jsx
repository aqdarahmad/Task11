import { useState, useEffect } from "react";
import './addescarts.css';
import RemoveButton from "../RemoveButton/RemoveButton";
import QuantityButtons from "../QuantityButtons/QuantityButtons";

export default function AddesCarts() {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("localProducts");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

const removeProduct = (id) => {
  setProducts((prevProducts) => {
    const updatedProducts = prevProducts.filter((p) => p.id !== id);
    localStorage.setItem("localProducts", JSON.stringify(updatedProducts));  
  return updatedProducts;
   
  });
};
  


const changeQuantity = (id, amount) => {
  setProducts((prevProducts) => {
    const updatedProducts = prevProducts.map((p) =>
      p.id === id
        ? { ...p, quantity: Math.max(1, (p.quantity || 1) + amount) }
        : p
    );
    localStorage.setItem("localProducts", JSON.stringify(updatedProducts)); 
    return updatedProducts;
  });
};

  const totalPrice = products.reduce(
    (sum, p) => sum + p.price * (p.quantity || 1), 0
  );

  return (
  <div className="cart-container">
    <h2>Shopping Cart</h2>
    {products.map(p => (
      <div key={p.id} className="cart-item">
        {(p.image || p.images?.[0]) &&
          <img
            src={p.image || p.images[0]}
            alt={p.name}
            className="cart-img"
          />
        }
        <div className="cart-info">
          <h4>{p.name}</h4>
          <p>Price: ${p.price}</p>
          <p>Subtotal: ${(p.price * (p.quantity || 1)).toFixed(2)}</p>

         <div>
  <QuantityButtons
    quantity={p.quantity || 1}
    onDecrease={() => changeQuantity(p.id, -1)}//ask changequnatity for dec 1
    onIncrease={() => changeQuantity(p.id, 1)}
  />
</div>
          
        </div>
        <RemoveButton onRemove={() => removeProduct(p.id)} />
      </div>
    ))}
    <h3>Total: ${totalPrice.toFixed(2)}</h3>
  </div>
);
} 