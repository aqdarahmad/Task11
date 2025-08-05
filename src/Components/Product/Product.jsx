import React, { useState, useEffect } from 'react';
import './product.css';
import AddProduct from '../AddProduct/AddProduct';

export default function Product({ info }) {
  const [mainImage, setMainImage] = useState(null);
  const [showAddProductForm, setShowAddProductForm] = useState(false);

  useEffect(() => {
    if (info?.images?.length > 0) {
      setMainImage(info.images[0]);
    }
  }, [info]);

  const handleAddToCart = () => {
    setShowAddProductForm(true);
  };

  const handleFilter = () => {

    console.log("Filter for category:", info.category);
  };

  return (
    <div className="product-card">
      <div className="product-id">ID: {info.id}</div>
      <div className="product-name">{info.name}</div>
      <div className="product-price">${info.price.toFixed(2)}</div>
      <div className="product-stock">
        {info.inStock ? (
          <span className="in-stock">In Stock</span>
        ) : (
          <span className="out-stock">Out of Stock</span>
        )}
      </div>
      <div className="product-rating">
        Rating: {info.rating?.rate ?? "N/A"} ({info.rating?.count ?? 0} reviews)
      </div>

      <div className="product-description">{info.description}</div>

      <div className="product-images">
        {mainImage && <img src={mainImage} alt={info?.name || "Product"} className="main-image" />}

        <div className="thumbnail-list">
          {info?.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${info?.name || "Product"} ${index + 1}`}
              className={`thumbnail ${img === mainImage ? 'selected' : ''}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>


      <div className="product-actions">
        <button className="add-button" onClick={handleAddToCart}> Add to Cart</button>
        <button className="filter-button" onClick={handleFilter}> Filter This</button>
      </div>


      {showAddProductForm && <AddProduct />}
    </div>
  );
}
