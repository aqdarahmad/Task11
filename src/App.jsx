
import AppRoutes from './AppRoutes'
import Footer from './Components/Footer/Footer';




import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Navitem from './Components/Navbar/Navitem';

export default function App() {




/* 
   const [Newproducts, setnewProducts] = useState([]);



    const addProduct = (newProduct) => {
    setnewProducts(prev => [...prev, newProduct]);
  };
 */
    














  return (
    <>
   {/*  <Navbar logo={"React Shop"}>
                <Navitem title={"Home"} link={"/"} />
                <Navitem title={"Details"} link={"/product/:id"} />
                <Navitem title={"Cart"} link={"/cart"} />


            </Navbar> */}
    

   <AppRoutes/>

{/*    <Footer/> */}









{/*  <div>
      <AddProduct addproduct={addProduct} />
    </div> */}








   

    
    </>
  )
}
