import { NavLink } from "react-router-dom"

const Navbar = () => {

    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/auth">Login</NavLink>
            <NavLink exact to="/favorites">Favorites</NavLink>

        </nav>
    )
}

export default Navbar