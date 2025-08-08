import { useState, useEffect } from "react";
import "./categoryproduct.css";
import classNames from 'classnames';

export default function CategoryProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();


  /* useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);
 */

  function fetchCategories() {
    const getData = async () => {

      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
      setCategories(data);

    }

    getData();
  }

  useEffect(() => {
    fetchCategories();
  }, []);




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
            className={classNames('category-card', { selected: selectedCategory === cat.id })}
          >
            {cat.name}


            {cat.image && <img src={cat.image} alt={cat.name} />}
            < span > {cat.name}</span>
          </div>
        ))
        }
      </div >

      {selectedCategory && (
        <>
          <h3>Products</h3>
          <div className="products-grid">
            {products.map((prod) => (
              <div key={prod.id} className="product-card">

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
    </div >
  );
}

/* 
نزلت مكتبه اسمها 
npm install classname وعملت امبورت
دائما الكاتيجوري 
الها كلاس ثابت 
هو 
categorycard وهلا
ازا تساوى الids اسم الكلاس بصير selected
في طريقه الif statment 
const isSelected = selectedCategory === cat.id;
const classNames = isSelected ? "category-card selected" : "category-card";

<div key={cat.id} className={classNames} onClick={() => handleCategoryClick(cat.id)}>
  ...
</div> */