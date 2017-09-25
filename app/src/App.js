import React from 'react'
import Routes from './Routes'
import Layout from './layout/index'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from "react-tap-event-plugin"
import './App.css'
injectTapEventPlugin()

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <Routes />
        </Layout>
      </MuiThemeProvider>
    )
  }
}
