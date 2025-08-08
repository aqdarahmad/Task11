import React, { useState } from 'react';
import './product.css';
import AddProduct from '../AddProduct/AddProduct';
import MoreDetailsButton from '../MoreDetails/MoreDetailsButtton'; 

export default function Product({ info }) {
  const images = Array.isArray(info?.images) ? info.images : [];
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [mainImage, setMainImage] = useState(images[0] || '');

  const handleAddToCart = () => {
    setShowAddProductForm(true);
  };

  const handleCloseForm = () => {
    setShowAddProductForm(false);
  };

  return (
    <div className="product-card">
      <h2 className="product-name">{info?.name || 'Unnamed Product'}</h2>

    

      <div className="thumbnail-list">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className={`thumbnail ${img === mainImage ? 'selected' : ''}`}
          
          />
        ))}
      </div>

      <div className="product-actions">
        <button onClick={handleAddToCart}>Add to Cart</button>
        <MoreDetailsButton product={info} />
      </div>

      {showAddProductForm && <AddProduct onClose={handleCloseForm} />}
    </div>
  );
}