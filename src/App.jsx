import Navbar from "./Components/Navbar/Navbar"
import Navitem from "./Components/Navbar/Navitem"
import Footer from "./Components/Footer/Footer"
import Category from "./Components/Category/Category";

import React, { useEffect, useState } from 'react';

export default function App() {


 const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:3000/categories");
      const data = await res.json();
 
      setCategories(data.categories || data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };




  return (
    <>
      <Navbar logo={"React Shop"}>
        <Navitem title={"Home"} link={"/"} />
        <Navitem title={"Details"} link={"/details"} />
        <Navitem title={"Cart"} link={"/cart"} />
       

      </Navbar>



      <div>
  <h2>Categories</h2>
  {
    categories.length === 0 ? (
      <p>No categories yet.</p>
    ) : (
      categories.map(cat => <Category key={cat.id} info={cat} />)
    )
  }
</div>






      <Footer/>

    
    </>
  )
}
