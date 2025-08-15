import { useState, useEffect } from 'react';
import CategoryProduct from "../Components/CategoryProducts/CategoryProducts";
export default function HomePage() {
    const baseurl = import.meta.env.VITE_BASE_URL

    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const res = await fetch(`${baseurl}/products`);
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
