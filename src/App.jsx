import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Button from './components/Button'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Button} />
      </Switch>
    </Router>
  )
}

export default App
