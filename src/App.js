import React from 'react'
import Home from "./comps/Home"
import {Route , BrowserRouter as Router , Switch} from 'react-router-dom'
import Show from "./comps/Show"
import Search from './comps/Search'
import Find from './comps/Find'
import Finds from './comps/Finds'
import Test from './comps/Test'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/show" component={Show} />
        <Route exact={true} path="/search" component={Search}/>
        <Route exact={true} path="/movies" component={Find}/>
        <Route exact={true} path="/series" component={Finds}/>
        <Route exact={true} path="/test" component={Test}/>
      </Switch>
    </Router>
  )
}

export default App
