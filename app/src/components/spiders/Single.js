import React from 'react'
import {connect} from 'react-redux'
import FontAwesome from 'react-fontawesome'
import RunList from './Runs'
import AccountList from '../accounts/List'
import AlertList from './Alerts'
import SpiderForm from './Form'
import SpiderInfo from './Info'
import {setEditMode} from '../../actions'


class Single extends React.Component {

  render() {
    const mode = this.props.mode
    return (
      <div>
      {mode === 'edit' && <SpiderForm edit={true}/>}
      {mode !== 'edit' && <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <strong>DIASPORA</strong>
            </div>
            <div className="g-mt-30">

              <div className="row">
                <div className="col-lg-6">
                  <SpiderInfo/>
                </div>
                <div className="col-lg-6">
                  <AccountList/>
                </div>
              </div>

              <AlertList/>
              <RunList/>
            </div>
          </div>
        </div>
      </div>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mode: store.app.mode
  }
}

export default connect(mapStateToProps)(Single)

// <div className="card-body">
//   <div className="row mb-4">
//     <div className="col-sm-6">
//       <h6 className="mb-3">{"https://diaspora.com/signin"}</h6>
//       <div>Concurrency: <strong>1</strong></div>
//       <div>Konopnickiej 42</div>
//       <div>43-190 Mikolow, Poland</div>
//       <div>Email: lukasz@bootstrapmaster.com</div>
//       <div>Phone: +48 123 456 789</div>
//     </div>
//   </div>
// </div>

// <FontAwesome onClick={this.delete.bind(this)}
//   name="trash"
//   style={{cursor: 'pointer', float: 'right', fontSize: '1.3em', marginRight: '1em'}}/>
