
import { Routes , Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CartPage from './Pages/CartPage'
import DetailsPage from './Pages/DetailsPage'
import Product from './Components/Product/Product'

export default function AppRoutes() {
  return (
    <div><Routes>

        <Route path='/' element={<HomePage/>}/>
        

    {/*    <Route path="/details" element={<DetailsPage />} /> */}


        
       {  <Route path="/product/:id" element={<DetailsPage />} /> }

        
        <Route path='/cart' element={<CartPage/>}/>
        </Routes>
        
        </div>
  )
}
