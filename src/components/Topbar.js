import { Link } from "react-router-dom"
import "../styles.css"

export const Topbar = () => {
    return(<>
        <div className="topbarContainer">
            <h1> Product Listing with Cart </h1>
            <div className="navLinks">
                <Link className="navLink" to="/"> Products </Link>
                <Link className="navLink" to="/cart"> Cart </Link>
            </div>
        </div>
    </>)
}