import React, { useState } from 'react';
import './moredetails.css';

export default function MoreDetailsButton({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="more-details-wrapper">
      <button
        className="more-details-button"
        onClick={() => setShowDetails(prev => !prev)}
      >
        {showDetails ? "Hide Details" : "More Details"}
      </button>

      {showDetails && (
        <div className="product-details">
          <h4>{product.name}</h4>
         
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Status:</strong> {product.inStock ? "In Stock" : "Out of Stock"}</p>
          <p><strong>Rating:</strong> {product.rating?.rate ?? 'N/A'} ({product.rating?.count ?? 0} reviews)</p>
          <p><strong>Description:</strong> {product.description}</p>
       
        
        </div>
      )}
    </div>
  );
}
