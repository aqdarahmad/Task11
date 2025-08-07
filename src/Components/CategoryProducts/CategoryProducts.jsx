import { useState, useEffect } from "react";
import "./categoryproduct.css";

export default function CategoryProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // جلب التصنيفات مرة واحدة
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  // جلب المنتجات عند الضغط على كاتيجوري
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetch(`http://localhost:3000/products?categoryId=${categoryId}`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  };

  return (
    <div className="category-container">
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`category-card ${selectedCategory === cat.id ? "selected" : ""}`}
          >
            {cat.image && <img src={cat.image} alt={cat.name} />}
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <>
          <h3>Products</h3>
          <div className="products-grid">
            {products.map((prod) => (
              <div key={prod.id} className="product-card">
                {/* عرض أول صورة من مصفوفة الصور */}
                <img 
                  src={prod.images && prod.images.length > 0 ? prod.images[0] : "https://via.placeholder.com/200x150?text=No+Image"} 
                  alt={prod.name} 
                  className="product-image"
                />
                <h4>{prod.name}</h4>
                <p>${prod.price}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
