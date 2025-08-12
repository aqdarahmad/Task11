import './addtocartbutton.css'
export default function AddProductButton({ product, onAdd }) {
  const handleAdd = () => {
    if (onAdd) onAdd(product);
  };
  return (
    <button onClick={handleAdd}>Add Product</button>
  );
}

