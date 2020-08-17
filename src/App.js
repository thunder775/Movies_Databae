import React from 'react';
import Grid from './Grid'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DetailsPage from "./details_page";


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
