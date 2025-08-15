import './addtocartbutton.css'
import handleAddToCart from '../../Handlers/handleAddToCart';
export default function AddProductButton({ product }) {

  return (
    <button onClick={handleAddToCart(product)}>Add Product</button>
  );
}

