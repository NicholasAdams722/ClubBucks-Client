import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className= "nav-link" to="/" >View Store Items</Link>
            </li>
            <li className="navbar__item">
                <Link className= "nav-link" to="/addItem" >Add New Item</Link>
            </li>
            <li className="navbar__item">
                <Link className= "nav_link" to="/studentWallets" >Student Wallets</Link>
            </li>
            <li className="navbar__item">
            </li>
            {
                (localStorage.getItem("cb_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("cb_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}

