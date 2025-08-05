
import './navitem.css'
import {useNavigate} from 'react-router-dom'

function Navitem( {title , link}) {
     const handleclick=()=>{
       navigate(link)
       onClick={handleclick}
    } 

    const navigate = useNavigate();
    
  return (
   <li className="navitem" onClick={handleclick}>{title}

   </li>
  )
}

export default Navitem