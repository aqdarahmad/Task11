
import AppRoutes from './AppRoutes'

import AddProduct from './Components/AddProduct/AddProduct';

import Slider from "react-slick";

import React, { useEffect, useState } from 'react';

export default function App() {





   const [Newproducts, setnewProducts] = useState([]);



    const addProduct = (newProduct) => {
    setnewProducts(prev => [...prev, newProduct]);
  };

    














  return (
    <>
    


   <AppRoutes/>









 <div>
      <AddProduct addproduct={addProduct} />
    </div>








   

    
    </>
  )
}
