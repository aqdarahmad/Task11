import { useState, useEffect } from 'react';
import CategoryProduct from "../Components/CategoryProducts/CategoryProducts";
export default function HomePage() {

    const [products, setProducts] = useState([]);
            const fetchProducts = async () => {
            const res = await fetch("http://localhost:3000/products");
            const data = await res.json();
            setProducts(data.products || data);
        
    };
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
        <div>
            <CategoryProduct />
        </div>
    )
}
