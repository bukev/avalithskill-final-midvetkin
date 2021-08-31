import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from '../screens/Home'
import Favorites from '../screens/Favorites'
import Auth from '../screens/Auth'
import EditMovie from '../screens/EditMovie'
import AddMovie from '../screens/AddMovie'


const AppRouter = (props) => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/edit-movie/:id">
                    <EditMovie/>
                </Route>
                <Route exact path="/add-movie/" component={AddMovie}/>
                <Route exact path="/favorites">
                    <Favorites user={props.user}/>
                </Route>
                <Route exact path="/auth">
                    <Auth setUser={props.setUser} />
                </Route>
                <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default AppRouter