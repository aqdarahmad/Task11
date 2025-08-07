import { useState, useEffect } from "react";
import './addescarts.css';

export default function AddedCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // جلب المنتجات كاملة من localStorage تحت المفتاح "localProducts"
    const storedProducts = localStorage.getItem("localProducts");
    if (storedProducts) {
      try {
        const parsedProducts = JSON.parse(storedProducts);
        setProducts(parsedProducts);
      } catch (error) {
        console.error("Error parsing localProducts from localStorage:", error);
        setProducts([]);
      }
    } else {
      setProducts([]);
    }
  }, []);

  if (products.length === 0) {
    return <p className="empty-cart-msg">Your cart is empty.</p>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-item-simple">
            <h4 className="product-name">{product.name}</h4>
            <p className="product-description">{product.description || "No description available"}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
