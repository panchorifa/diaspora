import React from 'react'
import {Link, withRouter} from 'react-router-dom'


class SideLink extends React.Component {
  render() {
    const path = this.props.path
    const uri = this.props.link
    return (
      <li className="nav-item">
        <Link to={uri} className={"nav-link "+(path === uri ? 'active' : '')}>
          <i className={"icon-"+this.props.icon}></i> {this.props.title}
        </Link>
      </li>
    )
  }
}

class Sidebar extends React.Component {
  render() {
    const path = this.props.location.pathname
    return(
      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <SideLink link={'/dashboard'} path={path}
              icon={'speedometer'} title='Dashboard'/>
            <li className="divider"></li>
            <li className="nav-title">Spiders</li>
            <li className="nav-item nav-dropdown">
              <a className="g-cursor-pointer nav-link nav-dropdown-toggle">
                <i className="icon-magic-wand"></i> Interactives
              </a>
              <ul className="nav-dropdown-items">
                {[1,2,3,4].map((s,i) => (
                  <SideLink link={'/spiders/'+s} path={path}
                      icon={'magic-wand'} title={'Spider '+s}/>
                ))}
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="g-cursor-pointer nav-link nav-dropdown-toggle">
                <i className="icon-magnet"></i> Pluckers
              </a>
              <ul className="nav-dropdown-items">
                {[5,6,7,8].map((s,i) => (
                  <SideLink link={'/spiders/'+s} path={path}
                    icon={'magnet'} title={'Spider '+s}/>
                ))}
              </ul>
            </li>
            <li className="nav-item nav-dropdown">
              <a className="g-cursor-pointer nav-link nav-dropdown-toggle">
                <i className="icon-check"></i> Verifiers
              </a>
              <ul className="nav-dropdown-items">
                {[9,10,11].map((s,i) => (
                  <SideLink link={'/spiders/'+s} path={path}
                    icon={'check'} title={'Spider '+s}/>
                ))}
              </ul>
            </li>
            <li className="divider"></li>
            <li className="nav-title">Notifications</li>
            <SideLink link={'/alerts'} path={path}
              icon={'bell'} title='Alerts'/>
          </ul>
        </nav>
      </div>
    )
  }
}

export default withRouter(Sidebar)

// <form className="sidebar-form">
//     <div className="form-group p-2  mb-0">
//         <input type="text" className="form-control" aria-describedby="search" placeholder="Search..."/>
//     </div>
// </form>

// <li className="divider"></li>
// <li className="nav-title">Runs</li>
// <SideLink link={'/today'} path={path}
//   icon={'clock'} title='Today'/>
// <SideLink link={'/yesterday'} path={path}
//   icon={'calendar'} title='Yesterday'/>
//
