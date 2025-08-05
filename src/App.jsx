import Navbar from "./Components/Navbar/Navbar"
import Navitem from "./Components/Navbar/Navitem"

export default function App() {
  return (
    <>
      <Navbar logo={"React Shop"}>
        <Navitem title={"Home"} link={"/"} />
        <Navitem title={"Details"} link={"/details"} />
        <Navitem title={"Cart"} link={"/cart"} />
       

      </Navbar>

    
    </>
  )
}
