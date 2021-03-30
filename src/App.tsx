import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import './App.scss'
import routes from './router'

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route: any) =>
          <Route path={route.path} exact component={route.component} />)
        }
      </Switch>
    </Router>
  )
}

export default App
