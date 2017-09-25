import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home              from './containers/Home'

export default ( ) => (
  <Switch>
    <Route component={Home} path="/" exact/>
  </Switch>
)
