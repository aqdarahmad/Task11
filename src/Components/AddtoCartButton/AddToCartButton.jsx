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
}
 */
import './addtocartbutton.css';
export default function AddProductButton({ product, onAdd }) {
    
  const handleAdd = () => {
    const storedProducts = JSON.parse(localStorage.getItem("localProducts") || "[]");
    storedProducts.push(product);
    localStorage.setItem("localProducts", JSON.stringify(storedProducts));

  
  };

  return (
    <button onClick={handleAdd}>Add Product</button>
  );
}
