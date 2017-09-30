import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class Template extends React.Component {
  refresh() {

  }
  render() {
    const single = this.props.single
    const limit = this.props.limit
    const pagination = false
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong>{limit ? 'Latest ' : ''}Alerts</strong>
                  <FontAwesome onClick={this.refresh.bind(this)}
                    name="refresh"
                    style={{cursor: 'pointer', float: 'right', fontSize: '1.3em'}}/>
                </div>
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        {!single && <th>Spider</th>}
                        <th>Account</th>
                        <th>Time</th>
                        <th>Message</th>
                        <th>Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.children}
                    </tbody>
                  </table>
                  {pagination && <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
