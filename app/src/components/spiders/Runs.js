import React from 'react'
import RunsTemplate from '../runs/Template'

export default class List extends React.Component {
  render() {
    const pagination = false
    return (
      <RunsTemplate single={true}>
        {[1,2].map((r, i) => (
          <tr>
            <td>Samppa Nori</td>
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
