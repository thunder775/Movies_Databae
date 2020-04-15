import React from 'react';
import logo from './logo.svg';
import Grid from './Grid'
import './App.css';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import DetailsPage from "./details_page";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/details/:id"} component={DetailsPage}/>
                <Route path={""}><Grid/></Route>
            </Switch>
        </Router>
    );
}

export default App;
