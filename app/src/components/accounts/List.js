import React from 'react'
import FontAwesome from 'react-fontawesome'
import AccountForm from './Form'

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {mode: 'list'}
  }

  setMode(mode) {
    this.setState({mode: mode})
  }

  render() {
    const mode = this.state.mode
    return (
    <div className="container-fluid">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            {mode === 'list' &&
            <div className="card">
              <div className="card-header">
                Accounts
                <FontAwesome onClick={this.setMode.bind(this, 'form')}
                  name="file"
                  style={{cursor: 'pointer', float: 'right', fontSize: '1.3em'}}/>
              </div>
              <div className="card-body">
                <table className="table">
                  <tbody>
                    {[1,2].map((a, i) => (
                    <tr>
                      <td>samppa</td>
                      <td style={{textAlign: 'right'}}>
                        <button className="btn btn-primary">
                          Run
                        </button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>}
            {mode === 'form' && <AccountForm cancel={this.setMode.bind(this, 'list')}/>}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
// <div style={{margin: '2em 0', float: 'right'}}>
//   <button style={{width: '8em'}} className="btn btn-primary">Run</button>
// </div>
