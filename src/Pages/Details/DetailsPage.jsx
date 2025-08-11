import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './moredetails.css';
import AddProductButton from '../../Components/AddtoCartButton/AddToCartButton';

export default function ProductDetails() {
  const { state } = useLocation();
  const product = state?.product || null;

  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <p>Product not found</p>;
  }


  const handleAddToCart = (product) => {

  const storedProducts = JSON.parse(localStorage.getItem("localProducts")) || [];

  storedProducts.push(product);


  localStorage.setItem("localProducts", JSON.stringify(storedProducts));

  console.log("Product added to localStorage:", product);
};


  return (
    <div className="product-details-page">
      <h2>{product.name}</h2>

      <div className="thumbnail-list">
        {product.images.slice(0, 3).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className="thumbnail"
            onClick={() => setMainImage(img)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>

      {mainImage && (
        <img
          src={mainImage}
          alt={product.name}
          className="main-image-large"
          style={{ width: '400px', marginTop: '10px' }}
        />
      )}

      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Status:</strong> {product.inStock ? "In Stock" : "Out of Stock"}</p>
      <p><strong>Rating:</strong> {product.rating?.rate ?? 'N/A'} ({product.rating?.count ?? 0} reviews)</p>
      <p><strong>Description:</strong> {product.description}</p>

     
      <AddProductButton product={product} onAdd={handleAddToCart} />

    </div>
  );
}
