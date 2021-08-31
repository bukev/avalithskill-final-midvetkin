import { NavLink } from "react-router-dom"

const Navbar = (props) => {
    console.log(props.user)
    const Login = props.user.id ? '' : <NavLink exact to="/auth">Login</NavLink>
    const Favorites = props.user.admin === 0 ? <NavLink exact to="/favorites">Favorites</NavLink> : ''

    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            {Favorites}
            {Login}

        </nav>
    )
}

export default Navbar