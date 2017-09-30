import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {setListMode} from '../actions'

const style = {
  color: '#FFF',
  fontWeight: 'bold',
  paddingTop: '.65em',
  fontFamily: "'Audiowide', cursive",
}

class Header extends React.Component {
  logout(){
    this.props.history.push('/')
  }

  render() {
    return (
      <header className="app-header navbar">
          <button className="navbar-toggler mobile-sidebar-toggler d-lg-none mr-auto" type="button">☰</button>
          <Link to="/" className="navbar-brand" style={style}>
            <img src="/images/spider.png"
                style={{height: '1em', marginRight:'.5em'}}/>CSPIDERS
          </Link>
          <button className="navbar-toggler sidebar-minimizer d-md-down-none" type="button">☰</button>
          <ul className="nav navbar-nav d-md-down-none">
              <li className="nav-item px-3">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </li>
              <li className="nav-item px-3">
                <Link onClick={setListMode} to="/spiders" className="nav-link">Spiders</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/runs" className="nav-link">Runs</Link>
              </li>
              <li className="nav-item px-3">
                <Link to="/alerts" className="nav-link">Alerts</Link>
              </li>

            </ul>
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a onClick={this.logout.bind(this)}
                  className="g-cursor-pointer g-mr-30 nav-link nav-link">
                  <span>Logout</span>
                </a>
              </li>
          </ul>
      </header>
    )
  }
}

export default withRouter(Header)
