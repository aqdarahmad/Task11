import Navbar from "./Components/Navbar/Navbar"
import Navitem from "./Components/Navbar/Navitem"
import Footer from "./Components/Footer/Footer"

export default function App() {
  return (
    <>
      <Navbar logo={"React Shop"}>
        <Navitem title={"Home"} link={"/"} />
        <Navitem title={"Details"} link={"/details"} />
        <Navitem title={"Cart"} link={"/cart"} />
       

      </Navbar>

      <Footer/>

    
    </>
  )
}
