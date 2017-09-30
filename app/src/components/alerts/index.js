import React from 'react'
import AlertsTemplate from './Template'

export default class List extends React.Component {
  render() {
    const limit = this.props.limit
    const pagination = false
    return (
      <AlertsTemplate limit={limit}>
        {[1,2].map((r, i) => (
          <tr>
            <td>Diaspora</td>
            <td>Samppa</td>
            <td>2012/01/01</td>
            <td>Some error explaining things Some error explaining things Some error explaining things</td>
            <td><span style={{width: '6em', padding: '.5em'}} className="badge badge-danger">Error</span></td>
          </tr>
        ))}
        <tr>
          <td>Diaspora</td>
          <td>Samppa</td>
          <td>2012/01/01</td>
          <td>Some other warning with some description of what went wrong</td>
          <td><span  style={{width: '6em', padding: '.5em'}} className="badge badge-warning">Warning</span></td>
        </tr>
      </AlertsTemplate>
    )
  }
}
