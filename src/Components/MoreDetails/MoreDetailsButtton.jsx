
import { useNavigate } from 'react-router-dom';
export default function MoreDetailsButtton({ product }) {
  const navigate = useNavigate();
  
  const goToDetails = () => {
    navigate(`/detail/${product.id}`, { state: { product } });
  };
  return (
    <button className="more-details-button" onClick={goToDetails}>
      More Details
    </button>
  );
}

