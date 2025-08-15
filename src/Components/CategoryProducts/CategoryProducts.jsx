import { useState, useEffect } from "react";
import "./categoryproduct.css";
import classNames from 'classnames';
import Product from "../Product/Product";
import Category from "../Category/Category";

export default function CategoryProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const baseurl = import.meta.env.VITE_BASE_URL;


  function fetchCategories() {
    fetch(`${baseurl}/categories?fields=id`)
      .then(res => res.json())
      .then(data => setCategories(data));
  }

  function fetchProducts(categoryId) {
    fetch(`${baseurl}/products${categoryId ? `?categoryId=${categoryId}` : ''}`)
      .then(res => res.json())
      .then(data => setProducts(
        data.map(p => ({
          id: p.id,
          name: p.name,
          image: p.image || (p.images?.[0] ?? null)
        }))
      ));
  }
  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchProducts(categoryId);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <div className="category-container">
    
      <div className="categories-container">
        {categories.map(cat => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={classNames('category-card', { selected: selectedCategory === cat.id })}
          >
            <Category info={cat} />
          </div>
        ))}
      </div>

      <h2>Products</h2>
      <div className="product-list">
        {products.map(prod => (
          <Product key={prod.id} info={prod} />
        ))}
      </div>
    </div>
  );
}
