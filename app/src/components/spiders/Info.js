import React from 'react'
import FontAwesome from 'react-fontawesome'
import {setEditMode} from '../../actions'

export default class Info extends React.Component {

  render() {
    return (
    <div className="container-fluid">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                Spider
                <FontAwesome onClick={setEditMode}
                  name="pencil"
                  style={{cursor: 'pointer', float: 'right', fontSize: '1.3em'}}/>

              </div>
              <div className="card-body">
                <div style={{fontSize: '.85em'}}>{"https://some-deploymenturl.fafdasfsadlfdakkdfafdkafda/fasfadsfasd/sfdafsdffda"}</div>
                <div style={{marginTop: '1em'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', borderTop: '1px solid #eee', padding: '.5em 0'}}>
                    <div><strong>Concurrency</strong></div>
                    <div>1</div>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '.5em 0'}}>
                    <div><strong>Type</strong></div>
                    <div>Interactive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
