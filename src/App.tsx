import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'

import './App.css'
import routes from './router'

const App = () => {
  return (
    <ConfigProvider>
      <Router>
        <Switch>
          {routes.map((route: any) =>
            <Route key={route.path} path={route.path} exact component={route.component} />)
          }
        </Switch>
      </Router>
    </ConfigProvider>
  )
}

export default App
