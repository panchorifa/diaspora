import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'
import {setFormMode} from '../../actions'

export default class List extends React.Component {
  render() {
    const pagination = false
    return (
      <div className="container-fluid">
        <div className="animated fadeIn">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <strong>Spiders</strong>
              <FontAwesome onClick={setFormMode}
                  name="file" style={{cursor: 'pointer',
                    float: 'right', fontSize: '1.3em'}}/>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-striped table-sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Url</th>
                    <th>Concurrency</th>
                    <th>Rate</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><Link to="/spiders/1">cspiders</Link></td>
                    <td>interactive</td>
                    <td>https://cspiders.com</td>
                    <td>1</td>
                    <td>every 1 hour @ 8:00 PM</td>
                    <td>
                      <span className="badge badge-success">Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td><Link to="/spiders/2">diaspora</Link></td>
                    <td>plucker</td>
                    <td>https://diaspora.com/signin</td>
                    <td>1</td>
                    <td>every 24 hours @ 5:00 PM</td>
                    <td>
                      <span className="badge badge-danger">Failed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {pagination && <nav>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
