
import Navbar from "../Components/Navbar/Navbar"
import Navitem from "../Components/Navbar/Navitem"
import Footer from "../Components/Footer/Footer"
import Category from "../Components/Category/Category";
import { useState, useEffect } from 'react';
import Product from "../Components/Product/Product";
import CategoryProduct from "../Components/CategoryProducts/CategoryProducts";


export default function HomePage() {


    const [categories, setCategories] = useState([]);


    const [products, setProducts] = useState([]);





    const fetchCategories = async () => {
        try {
            const res = await fetch("http://localhost:3000/categories");
            const data = await res.json();

            setCategories(data.categories || data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };





    const fetchProducts = async () => {
        try {
            const res = await fetch("http://localhost:3000/products");
            const data = await res.json();
            setProducts(data.products || data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };



    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);




     
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, 
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};






    return (
        <div>
          {/*   <Navbar logo={"React Shop"}>
                <Navitem title={"Home"} link={"/"} />
                <Navitem title={"Details"} link={"/details"} />
                <Navitem title={"Cart"} link={"/cart"} />


            </Navbar> */}



{/* 

            <div>
                <h2>Categories</h2>
                {
                    categories.length === 0 ? (
                        <p>No categories yet.</p>
                    ) : (
                        <div className="categories-container">
                            {categories.map(cat => (
                                <Category
                                    key={cat.id}
                                    info={cat}
                                    onClick={() => handleCategoryClick(cat.name)}
                                />
                            ))}
                        </div>
                    )
                }
            </div>




<div className="products-grid">
  <h2>Products</h2>
  {
    products.length === 0 ? (
      <p>No products yet.</p>
    ) : (
      products.map(prod => <Product key={prod.id} info={prod} />)
    )
  }
</div>
 */}

 <CategoryProduct/>


{/* 
            <Footer /> */}


        </div>
    )
}
