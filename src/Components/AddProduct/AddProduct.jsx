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
      images: [],  
    };

    // 
    const storedProducts = JSON.parse(localStorage.getItem("localProducts") || "[]");
    storedProducts.push(newProduct);
    localStorage.setItem("localProducts", JSON.stringify(storedProducts));

    //
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Product added:", data);

      //
      setName('');
      setPrice('');
      setDescription('');

      onClose();
    })
    .catch(err => {
      console.error("Error adding product:", err);
    });
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























/* import { useState } from "react";
import './addproduct.css'

export default function AddProduct({ onClose }) {  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: parseFloat(price),
      description,
    };

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Product added:", data);
      
      setName('');
      setPrice('');
      setDescription('');
     
      onClose();
    })
    .catch(err => {
      console.error("Error adding product:", err);
    });
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
 */