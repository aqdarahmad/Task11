import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './moredetails.css';
import AddProductButton from '../../Components/AddtoCartButton/AddToCartButton';

export default function DetailsPage() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const baseurl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
   
    fetch(`${baseurl}/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (Array.isArray(data.images) && data.images.length > 0) {
          setMainImage(data.images[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-details-page">
      <h2>{product.name}</h2>

      <div className="thumbnail-list">
        {Array.isArray(product.images) && product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            className={`thumbnail ${mainImage === img ? 'selected' : ''}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {mainImage && (
        <img
          src={mainImage}
          alt={product.name}
          className="main-image-large"
        />
      )}

      <p><strong>Price:</strong> ${product.price?.toFixed(2) ?? 'N/A'}</p>
      <p><strong>Status:</strong> {product.inStock ? "In Stock" : "Out of Stock"}</p>
      <p><strong>Rating:</strong> {product.rating?.rate ?? 'N/A'} ({product.rating?.count ?? 0} reviews)</p>
      <p><strong>Description:</strong> {product.description}</p>

      <AddProductButton product={product} />
    </div>
  );
}
