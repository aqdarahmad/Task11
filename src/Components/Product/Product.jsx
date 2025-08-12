import React, { useState, useEffect } from 'react';
import './product.css';
import MoreDetailsButtton from '../MoreDetails/MoreDetailsButtton';
import AddProductButton from '../AddtoCartButton/AddToCartButton';

export default function Product({ info, showMoreDetails = true}) {
  const images = info.images || [];
  const [mainImage, setMainImage] = useState("");


  const handleAddProduct = (product) => {
   const storedProducts = JSON.parse(localStorage.getItem("localProducts")) || [];
   storedProducts.push(product);
   localStorage.setItem("localProducts", JSON.stringify(storedProducts));
  };

  
    useEffect(() => {
      if (images.length > 0) {
        setMainImage(images[0]);
      }
    }, [images]);

    
    return (
    <div className="product-card">
      <h2 className="product-name">{info.name}</h2>
       <div className="thumbnail-list">
        <img
          src={mainImage }
          alt={info.name}
          className="product-image"
        />
      </div>
      <div className="product-actions">
       <AddProductButton product={info} onAdd={handleAddProduct} />


       {showMoreDetails && <MoreDetailsButtton product={info} />}
      </div>
    </div>
  );
} 
