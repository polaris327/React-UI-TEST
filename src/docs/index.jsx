import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './Routes/Home.jsx'
import NoMatch from './Routes/NoMatch.jsx'

render((
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
), document.getElementById('app'))
