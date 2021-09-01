import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Auth from '../screens/Auth'
import EditMovie from '../screens/EditMovie'
import AddMovie from "../screens/AddMovie";

const AppRouter = () => {

    const [user, setUser] = useState({})
    const [favoriteIds, setFavoriteIds] = useState([])

    return(
        <Router>
            <Navbar key="navbar" user={user}/>
            <Switch>
                <Route path="/edit-movie/:id">
                    <EditMovie user={user}/>
                </Route>
                <Route path="/add-movie">
                    <AddMovie user={user}/>
                </Route>
                <Route exact path="/favorites">
                    <Favorites user={user} setFavoriteIds={setFavoriteIds}/>
                </Route>
                <Route exact path="/auth">
                    <Auth setUser={setUser} />
                </Route>
                <Route exact path="/">
                    <Home user={user} favoriteIds={favoriteIds}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter