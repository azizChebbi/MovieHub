import React from "react";
import Landing from "./comps/Landing/Landing";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Main from "./comps/Main/Main";
import Details from "./comps/Details/Details";
import "./css/app.css";
import Find from "./comps/Find/Find";

function App() {
    const movies_data = useSelector((state) => state.movies);
    const series_data = useSelector((state) => state.series);
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={Landing} />
                <Route exact={true} path='/main' component={Main} />
                <Route exact={true} path='/details' component={Details} />
                <Route
                    exact={true}
                    path='/movies'
                    render={() => <Find list={movies_data} path={"movie"} />}
                />
                <Route
                    exact={true}
                    path='/series'
                    render={() => <Find list={series_data} path={"tv"} />}
                />
            </Switch>
        </Router>
    );
}

export default App;
