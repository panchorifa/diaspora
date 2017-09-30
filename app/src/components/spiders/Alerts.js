import React from 'react'
import AlertsTemplate from '../alerts/Template'

export default class Alerts extends React.Component {
  render() {
    return (
      <AlertsTemplate single={true}>
        {[1,2].map((r, i) => (
          <tr>
            <td>Samppa</td>
            <td>2012/01/01</td>
            <td>Some error explaining things Some error explaining things Some error explaining things</td>
            <td><span style={{width: '6em', padding: '.5em'}} className="badge badge-danger">Error</span></td>
          </tr>
        ))}
      </AlertsTemplate>
    )
  }
}
