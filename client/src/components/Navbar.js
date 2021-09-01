import { NavLink } from "react-router-dom"
import '../styles/navbar.css'

const Navbar = (props) => {
    const Login = props.user.id ? '' : <NavLink exact to="/auth" className="loginNavLink" activeClassName="activeNavLink">Login</NavLink>
    const Favorites = props.user.admin === 0 ? <NavLink exact to="/favorites" activeClassName="activeNavLink">Favorites</NavLink> : ''

    return(
        <div className="navbar">
            <div className="navbar-content">
                <h1 className="logo">
                    Movie Site
                </h1>
                <div className="links">
                    <NavLink exact to="/" activeClassName="activeNavLink">Home</NavLink>
                    {Favorites}
                    {Login}
                </div>
            </div>

        </div>
    )
}

export default Navbar