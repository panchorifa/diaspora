import React from 'react'
import {connect} from 'react-redux'
import SpiderForm from './Form'
import SpiderList from './List'

class Spiders extends React.Component {
  render() {
    const mode = this.props.mode
    return (
      <div>
        {mode === 'form' && <SpiderForm/>}
        {mode === 'list' && <SpiderList/>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mode: store.app.mode
  }
}

export default connect(mapStateToProps)(Spiders)
