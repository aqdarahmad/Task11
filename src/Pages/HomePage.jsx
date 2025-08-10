
import { useState, useEffect } from 'react';
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



    return (
        <div>
            <CategoryProduct />
        </div>
    )
}
