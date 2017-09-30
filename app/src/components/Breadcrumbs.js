import React from 'react'

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        <li className="breadcrumb-item">Home</li>
        <li className="breadcrumb-item"><a href="#">Admin</a>
        </li>
        <li className="breadcrumb-item active">Dashboard</li>
      </ol>
    )
  }
}
