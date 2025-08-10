/* import { useState, useEffect } from "react";
import './addescarts.css';

export default function AddedCart() {
  const [products, setProducts] = useState([]); */
/* 
  useEffect(() => {
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
  }, []); */
/*   function getStoredProducts() {
  const storedProducts = localStorage.getItem("localProducts");
  return storedProducts ? JSON.parse(storedProducts) : [];
}

useEffect(() => {
 
  setProducts(getStoredProducts());
}, []);

 */
 /*  if (products.length === 0) {
    return <p className="empty-cart-msg">Your cart is empty.</p>;
  } */

  /*     const totalPrice = products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-item-simple">
            <h4 className="product-name">{product.name}</h4>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-price">
                  ${product.price} x {product.quantity || 1} = ${(product.price * (product.quantity || 1)).toFixed(2)}
                </p>
          </div>
        ))}
        <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}
 */
import { useState, useEffect } from "react";
import './addescarts.css';

export default function AddedCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("localProducts");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const totalPrice = products.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

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
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Description:</strong> {product.description}</p>
          
            <p><strong>Subtotal:</strong> ${(product.price * (product.quantity || 1)).toFixed(2)}</p>
          </div>
        ))}
        <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}
