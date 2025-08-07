import { useState } from "react";
import './addproduct.css'

export default function AddProduct({ onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      description,
    };

  
    const storedProducts = JSON.parse(localStorage.getItem("localProducts") || "[]");

   
    storedProducts.push(newProduct);

  
    localStorage.setItem("localProducts", JSON.stringify(storedProducts));

  
    setName('');
    setPrice('');
    setDescription('');

 
    onClose();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        step="0.01"
        min="0"
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button type="submit">Add Product</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}
