import './addtocartbutton.css'
export default function AddProductButton({ product, onAdd }) {
  const handleAdd = () => {
    if (onAdd) onAdd(product);
  };

  return (
    <button onClick={handleAdd}>Add Product</button>
  );
}












/* import { useState } from "react";
import './addtocartbutton.css'
export default function AddProductButton({ onAdd }) {
  
  const product = {
    id: Date.now(),
    name: "",
    price: 9.99,
    description:"",
  };

  const handleAdd = () => {
   
    const storedProducts = JSON.parse(localStorage.getItem("localProducts") || "[]");
    storedProducts.push(product);
    localStorage.setItem("localProducts", JSON.stringify(storedProducts));

   
    if (onAdd) onAdd(product);
  };

  return (
    <button onClick={handleAdd}>Add Product</button>
  );
} */

/* import './addtocartbutton.css'; */


/* 
export default function AddProductButton({ product }) {
  const handleAdd = () => {
    if (!product?.id) return alert("Invalid product");

    const storedProducts = JSON.parse(localStorage.getItem("localProducts") || "[]");

    const existingProduct = storedProducts.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
      storedProducts.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("localProducts", JSON.stringify(storedProducts));
    alert("Product added to cart!");
  };

  return <button onClick={handleAdd}>Add Product</button>;
}
 */


