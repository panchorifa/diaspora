import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class Spinner extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center', margin: '4em auto'}}>
        <FontAwesome name="circle-o-notch" size="2x" spin/><br/>
        <div style={{marginTop: '.25em'}}>Loading...</div>
      </div>
    )
  }
}
