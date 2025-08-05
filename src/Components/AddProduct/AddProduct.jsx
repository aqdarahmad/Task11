import { useState } from "react";
import './addproduct.css'

export default function AddProduct({ addProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
    const [addnewproduct, setaddnewproduct] = useState('');

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
      .then(res => res.json()).then(data=>console.log(()=>setaddnewproduct({name:"",price:"",description:""})))
       
      
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
      <button type="submit">Add Product</button>
    </form>
  );
}
