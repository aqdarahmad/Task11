import './product.css';
import MoreDetailsButtton from '../MoreDetails/MoreDetailsButtton';
import AddProductButton from '../AddtoCartButton/AddToCartButton';


export default function Product({ info, showMoreDetails = true }) {
  const mainImage = info.image || null;
  return (
    <div className="product-card">
      <h2 className="product-name">{info.name}</h2>
      <div className="thumbnail-list">
        <img
          src={mainImage}
          alt={info.name}
          className="product-image"
        />
      </div>
      <div className="product-actions">
        <AddProductButton product={info} />


        {showMoreDetails && <MoreDetailsButtton product={info} />}
      </div>
    </div>
  );
} 
