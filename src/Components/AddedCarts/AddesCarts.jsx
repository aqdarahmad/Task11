import { useState, useEffect } from "react";
import './addescarts.css';
import QuantityButtons from "../QuantityButtons/QuantityButtons";

export default function AddesCarts() {
  const [products, setProducts] = useState([]);


  const totalPrice = products.reduce(
    (sum, p) => sum + ((p?.price ?? 0) * (p?.quantity || 1)),
    0
  );
useEffect(() => {
  localStorage.removeItem("localProducts");
  setProducts([]);
}, []);
 
  useEffect(() => {
    const stored = localStorage.getItem("localProducts");
    if (stored) {
      const parsed = JSON.parse(stored)
        .filter(p => p && p.id != null); 
      setProducts(parsed);
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

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {products.map((p, index) => {
      
        const imgSrc = p?.image || (Array.isArray(p?.images) && p.images[0]) || null;

        return (
          <div key={`${p.id}-${index}`} className="cart-item">
            {imgSrc && (
              <img
                src={imgSrc}
                alt={p.name || "Product"}
                className="cart-img"
              />
            )}
            <div className="cart-info">
              <h4>{p.name || "Unnamed Product"}</h4>
              <p>Price: ${p.price ?? 0}</p>
              <p>Subtotal: ${((p.price ?? 0) * (p.quantity || 1)).toFixed(2)}</p>

              <div>
                <QuantityButtons
                  quantity={p.quantity || 1}
                  onDecrease={() => changeQuantity(p.id, -1)}
                  onIncrease={() => changeQuantity(p.id, 1)}
                />
              </div>
            </div>
            <button onRemove={() => removeProduct(p.id)} >Remove</button>
          </div>
        );
      })}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
