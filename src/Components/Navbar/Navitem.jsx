import './navitem.css';
import { useNavigate } from 'react-router-dom';

function Navitem({ title, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <li className="navitem" onClick={handleClick}>
      {title}
    </li>
  );
}

export default Navitem;
