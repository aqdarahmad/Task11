
import { useEffect, useState } from 'react';
import Product from '../Components/Product/Product';

export default function DetailsPage() {

  const [product, setProduct] = useState([]);

  const fetchProduct =  async() =>{
    try{
      const response = await fetch("http://localhost:3000/products")
      const dataset = await response.json();
      setProduct(dataset);
    }
    catch(error){
       console.error("Error fetching product", error);
    }
  };

  useEffect(() => {
    fetchProduct();
   
  }, []);






  return (
    <div style={{
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  overflowX: "auto",
  whiteSpace: "nowrap",
  padding: "10px"
}} className="details-page">
  {product.map(item => (
    <Product key={item.id} info={item} />
  ))}
</div>

  );
}
