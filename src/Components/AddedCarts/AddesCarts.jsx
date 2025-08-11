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

  useEffect(() => {
    localStorage.setItem("localProducts", JSON.stringify(products));
  }, [products]);

  const handleRemove = (id) => {
    const filtered = products.filter(p => p.id !== id);
    setProducts(filtered);
  };

  const handleQuantityChange = (id, delta) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        const newQuantity = (product.quantity || 1) + delta;
        return {
          ...product,
          quantity: newQuantity > 0 ? newQuantity : 1
        };
      }
      return product;
    }));
  };

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
          <div
            key={product.id}
            className="product-item-simple"
            style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}
          >
            {(product.images?.[0] || product.image) && (
              <img
                src={product.images?.[0] || product.image}
                alt={product.name}
                style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '15px', borderRadius: '8px' }}
              />
            )}
            <div style={{ flexGrow: 1 }}>
              <h4 className="product-name">{product.name}</h4>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Subtotal:</strong> ${(product.price * product.quantity).toFixed(2)}</p>
              <div style={{ marginTop: '5px' }}>
                <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                <span style={{ margin: '0 10px' }}>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
              </div>
            </div>
            <button
              onClick={() => handleRemove(product.id)}
              style={{
                marginLeft: '10px',
                backgroundColor: '#c0392b',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <h3 className="total-price">Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}
