
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/Cart/CartPage'
import DetailsPage from './Pages/Details/DetailsPage'
import Product from './Components/Product/Product'
import Layout from './Components/Layout/Layout'

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/detail/:id" element={<DetailsPage />} />

          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>


    </div>
  )
}
