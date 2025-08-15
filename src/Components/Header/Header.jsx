import Navitem from '../Navbar/Navitem';
import Navbar from '../Navbar/Navbar';

export default function Header() {
  return (
    <div>

         <Navbar logo="React Shop">
        <Navitem title="Home" link="/" />
        <Navitem title="Cart" link="/cart" />
      </Navbar>
    </div>
  )
}
