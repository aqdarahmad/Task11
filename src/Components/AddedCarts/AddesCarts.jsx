import { useState, useEffect } from "react";
import './addescarts.css';
import RemoveButton from "../RemoveButton/RemoveButton";

export default function AddesCarts() {
  const [products, setProducts] = useState([]);


    useEffect(() => {
    localStorage.setItem("localProducts", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const stored = localStorage.getItem("localProducts");
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  }, []);

  const removeProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
      /*  localStorage.setItem("localProducts", JSON.stringify(products)); */
  /*   products = localStorage.setItem("localProducts"); */
  };

  const changeQuantity = (id, amount) => {
    setProducts(prev => prev.map(p =>
      p.id === id
        ? { ...p, quantity: Math.max(1, (p.quantity || 1) + amount) }
        : p
    ));
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
              <button onClick={() => changeQuantity(p.id, -1)}>-</button>
              <span>{p.quantity || 1}</span>
              <button onClick={() => changeQuantity(p.id, 1)}>+</button>
            </div>
          </div>
         <RemoveButton onRemove={() => removeProduct(p.id)}/>
            
         
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
