import React from 'react'
import RunsTemplate from './Template'

export default class List extends React.Component {
  refresh(){

  }
  render() {
    const limit = this.props.limit
    const pagination = false
    return (
      <RunsTemplate limit={limit}>
        {[1,2].map((r, i) => (
        <tr>
          <td>Diaspora</td>
          <td>Samppa</td>
          <td>2012/01/01</td>
          <td>2012/01/01</td>
          <td>24 secs</td>
          <td><span className="badge badge-success">Active</span></td>
        </tr>
        ))}
      </RunsTemplate>
    )
  }
}
