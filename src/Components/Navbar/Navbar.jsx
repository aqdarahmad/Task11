
import './navbar.css'

export default function Navbar({ logo, children }) {

    return (
        <div className="navbar" style={{ color: "red" }}>

            <div className="logo">{logo}</div>
            <div className="links">
                {
                    children
                }
            </div>
        </div>
    )
}
