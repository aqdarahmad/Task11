import { useState, useEffect } from "react";
import './addescarts.css';

export default function AddedCart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("localProducts");
    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);

      
      const mergedProducts = parsedProducts.reduce((acc, prod) => {
        const existing = acc.find(item => item.id === prod.id);
        if (existing) {
          existing.quantity = (existing.quantity || 1) + (prod.quantity || 1);
        } else {
          acc.push({ ...prod, quantity: prod.quantity || 1 });
        }
        return acc;
      }, []);

      setProducts(mergedProducts);
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
        {products.map((product, index) => (
          <div key={`${product.id}-${index}`} className="product-item-simple">
            <h4 className="product-name">{product.name}</h4>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> {product.quantity}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Subtotal:</strong> ${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}
