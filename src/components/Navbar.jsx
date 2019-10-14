import React from "react";
import { Route, Link, Switch,Redirect, BrowserRouter as Router } from 'react-router-dom';
import Movies from "./movies";
import Login from "./Login";
import Notfound from "./Notfound";
const Navbar = (props)=>{
    return(
        <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                    <li className="nav-item">
                            <Link className="nav-link" to="/Info">Info</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route
                path="/"
                component={Movies}
                exact
            />
            <Route
                path="/login"
                component={Login}
                exact
            />
                <Route path="/notfound" component={Notfound}/>
                <Redirect to="/notfound"/>
            </Switch>
        </Router>
    );
};
export default Navbar;