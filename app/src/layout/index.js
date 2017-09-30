import React from 'react'
import {withRouter} from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

class Layout extends React.Component {
  render() {
    const login = this.props.location.pathname === '/'
    return (
      <div>
        {login && <div>{this.props.children}</div>}
        {!login && <div style={{borderTop: '1px solid transparent'}}>
          <Header/>
          <div className="app-body">
            <Sidebar/>
            <main className="main">
              {this.props.children}
            </main>
          </div>
        </div>}
      </div>
    )
  }
}

export default withRouter(Layout)
