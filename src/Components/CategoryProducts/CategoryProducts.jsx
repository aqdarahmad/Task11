import { useState, useEffect } from "react";
import "./categoryproduct.css";
import classNames from 'classnames';
import Product from "../Product/Product";

export default function CategoryProduct() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();


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
  <div className="product-list">
    {products.map((prod) => (
      <Product
        key={prod.id}
        info={prod}
        onAddToCart={() => console.log(`Added ${prod.name} to cart`)}
        onMoreDetails={() => console.log(`Details of ${prod.name}`)}
      />
    ))}
  </div>
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