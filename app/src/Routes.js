import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard         from './containers/Dashboard'
import Login             from './containers/Login'
import Diaspora          from './containers/Diaspora'
import Alerts           from './containers/Alerts'
import Today             from './containers/Today'
import Yesterday         from './containers/Yesterday'
import Spider            from './containers/Spider'
import Spiders           from './containers/Spiders'
import Runs              from './containers/Runs'

export default ( ) => (
  <Switch>
    <Route component={Login} path="/" exact/>
    <Route component={Dashboard} path="/dashboard" exact/>
    <Route component={Alerts} path="/alerts" exact/>
    <Route component={Today} path="/today" exact/>
    <Route component={Yesterday} path="/yesterday" exact/>
    <Route component={Spiders} path="/spiders" exact/>
    <Route component={Runs} path="/runs" exact/>
    <Route component={Spider} path="/spiders/:id" exact/>
    <Route component={Diaspora} path="/diaspora" exact/>
  </Switch>
)
