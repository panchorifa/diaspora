import React from 'react'
import {Link} from 'react-router-dom'

class Stat extends React.Component {
  render() {
    return (
      <div className="col-sm-6 col-lg-3">
          <Link to={'/'+this.props.title} className="card g-cursor-pointer">
              <div className="card-block p-3 clearfix">
                  <i className={"fa p-3 font-2xl mr-3 float-left "+this.props.style}
                    style={{width: '2.3em', height: '2.3em'}}>
                    {this.props.img && <img src={this.props.img}
                      style={{textAlign: 'center', height: '1em'}}/>}
                  </i>
                  <div className="text-uppercase text-muted font-weight-bold font-xs mb-0 mt-2">
                    {this.props.title}
                  </div>
                  <div className="h5">{this.props.value}</div>
              </div>
          </Link>
      </div>
    )
  }
}

export default class Stats extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">
          <div className="row">
            <Stat title={'spiders'} value={1} style={'bg-primary'} img={'/images/white-spider.png'}/>
            <Stat title={'runs'} value={100} style={'fa-cogs bg-warning'}/>
            <Stat title={'alerts'} value={10} style={'fa-bell bg-danger'}/>
          </div>
        </div>
      </div>
    )
  }
}
