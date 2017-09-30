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
    const edit = this.props.edit
    const errors = {}
    return (
      <div className="card" style={{maxWidth: '70em'}}>
    <div className="card-header">
        <strong>{edit ? 'Edit' : 'Add'}</strong> Spider
    </div>
    <div className="card-body">
        <div className="row">
        <div className="form-group col-sm-3">
            <label for="company">Name</label>
            <input type="text" className="form-control" id="company" placeholder="Spider name"/>
        </div>

        <div className="form-group col-sm-7">
            <label for="vat">Url</label>
            <input type="text" className="form-control" id="vat" placeholder="Spider deployment url"/>
        </div>
        <div className="form-group col-sm-2">
            <label for="concurrency">Concurrency</label>
            <select className="form-control" id="concurrency">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>20</option>
              <option>50</option>
              <option>100</option>
            </select>
        </div>
        </div>


        <div className="row">
          <div className="form-group col-sm-4">
            <label for="city">Type</label>
            <div>
              <select id="select" name="select" className="form-control">
                <option value="0">Please select</option>
                <option value="1">Interactive</option>
                <option value="2">Plucker</option>
                <option value="3">Verifier</option>
              </select>
            </div>
          </div>

          <div className="form-group col-sm-4">
            <label for="startTime">Run Start Time</label>
            <div style={{display: 'flex'}}>
              <select className="form-control" id="hour">
                <option>12</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
              </select>
              <select className="form-control" id="min">
                <option>:00</option>
                <option>:15</option>
                <option>:30</option>
              </select>
              <select className="form-control" id="am">
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          <div className="form-group col-sm-4">
            <label for="postal-code">Run Rate in Hours</label>
            <input type="text" className="form-control" id="postal-code" placeholder="Run spider every x hours"/>
          </div>

        </div>
      </div>
      <div className="card-footer text-right">
        <button
          style={{minWidth: '10em'}}
          onClick={this.cancel.bind(this)}
          className="btn btn-sm btn-secondary g-mr-20">
          <i className="fa fa-ban"></i> Cancel
        </button>
        <button
          style={{minWidth: '10em'}}
          onClick={this.submit.bind(this)}
          className="btn btn-sm btn-primary">
          <i className="fa fa-dot-circle-o"></i> {edit ? 'Update' : 'Add'}
        </button>
      </div>
    </div>
    )
  }
}

export default withRouter(Form)
