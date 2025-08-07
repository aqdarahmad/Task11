import { useState, useEffect } from "react";
import './addescarts.css';

export default function AddedCart() {
  const [cartIds, setCartIds] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      console.log("Loaded cart IDs:", parsedCart);
      setCartIds(parsedCart);
    }
  }, []);

  useEffect(() => {
    if (cartIds.length === 0) {
      setProducts([]);
      return;
    }

    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(allProducts => {
        // تأكد أن cartIds و p.id نفس النوع (نصوص أو أرقام)
        const cartIdsAsNumbers = cartIds.map(id => Number(id));
        const filtered = allProducts.filter(p => cartIdsAsNumbers.includes(p.id));
        console.log("Filtered products:", filtered);
        setProducts(filtered);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [cartIds]);

  const removeFromCart = (id) => {
    const updatedCart = cartIds.filter(pid => pid !== id);
    setCartIds(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (products.length === 0) {
    return <p>سلة التسوق فارغة.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>سلة التسوق</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {products.map(product => (
          <div
            key={product.id}
            style={{ display: "flex", alignItems: "center", gap: "15px", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
          >
            <img
              src={product.images && product.images.length > 0 ? product.images[0] : "https://via.placeholder.com/100x80?text=No+Image"}
              alt={product.name}
              style={{ width: "100px", height: "80px", objectFit: "cover", borderRadius: "6px" }}
            />
            <div style={{ flexGrow: 1 }}>
              <h4 style={{ margin: 0 }}>{product.name}</h4>
              <p style={{ margin: "5px 0" }}>${product.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(product.id)}
              style={{ padding: "6px 12px", backgroundColor: "#d9534f", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
