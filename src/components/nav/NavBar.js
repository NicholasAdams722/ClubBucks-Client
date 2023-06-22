
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">Store</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/mycart">My Cart</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/login"
          onClick={
            () => {
              localStorage.removeItem("cb_token")
            }
          }>
          Logout
        </Link>
      </li>
    </ul>
  )
}