import React from 'react';
import logo from './logo.svg';
import Grid from './Grid'
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import DetailsPage from "./details_page";
import SearchPage from "./searchPage";


function App() {
    return (
        <Router>
            <Switch>
                {/*<Route path={"/search"} component={SearchPage}/>*/}
                <Route path={"/details/:id"} component={DetailsPage}/>
                <Route path={"/search/:query"} component={Grid}/>
                <Route path={"/:pageNumber"} component={Grid}/>
                <Route path={""} component={Grid}/>
            </Switch>
        </Router>
    );
}

export default App;
