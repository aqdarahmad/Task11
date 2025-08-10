
import { useEffect, useState } from 'react';
import Product from '../Components/Product/Product';
import { useParams } from 'react-router-dom';

export default function DetailsPage() {

  const [product, setProduct] = useState([]);
   const { id } = useParams();

  const fetchProduct = async () => {
    
      const response = await fetch(`http://localhost:3000/products/${id}`)
      const dataset = await response.json();
      setProduct(dataset);
   
   
  };

  useEffect(() => {
    fetchProduct();

  }, [id]);


  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      overflowX: "auto",
      whiteSpace: "nowrap",
      padding: "10px"
    }} className="details-page">
     <Product key={product.id} info={product} />
    </div>

  );
}
