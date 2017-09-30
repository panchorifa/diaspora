import React from 'react'
import {withRouter} from 'react-router-dom'
import {setListMode} from '../../actions'

class Form extends React.Component {

  cancel() {
    setListMode()
  }

  submit() {
// this.props.history.push('/spiders')
  }

  render() {
    const errors = {}
    return (
      <div className="card" style={{maxWidth: '70em'}}>
        <div className="card-header">
          <strong>Add</strong> Account
        </div>
        <div className="card-body">
          <div className="row">
            <div className="form-group col-sm-6">
              <label for="username">Username</label>
              <input type="text" className="form-control" id="company" placeholder="Username"/>
            </div>
            <div className="form-group col-sm-6">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="vat" placeholder="Password"/>
            </div>
          </div>
          <div className="card-footer text-right">
            <button
              style={{minWidth: '6em'}}
              onClick={this.props.cancel.bind(this)}
              className="btn btn-sm btn-secondary g-mr-20">
              <i className="fa fa-ban"></i> Cancel
            </button>
            <button
              style={{minWidth: '6em'}}
              onClick={this.submit.bind(this)}
              className="btn btn-sm btn-primary">
              <i className="fa fa-dot-circle-o"></i> Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Form)
