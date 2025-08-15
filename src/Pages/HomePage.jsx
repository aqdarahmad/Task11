import { useState, useEffect } from 'react';
import CategoryProduct from "../Components/CategoryProducts/CategoryProducts";
export default function HomePage() {
    const baseurl = import.meta.env.VITE_BASE_URL
    return (
        <div>
            <CategoryProduct />
        </div>
    )
}

