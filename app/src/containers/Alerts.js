import React from 'react'
import Content from '../components/Content'
import AlertList from '../components/alerts'

export default class Alerts extends React.Component {
  render() {
    return (
      <Content title="Alerts">
        <AlertList/>
      </Content>
    )
  }
}
