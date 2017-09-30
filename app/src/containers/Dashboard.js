import React from 'react'
import Stats from '../components/Stats'
import Content from '../components/Content'
import Alerts from '../components/alerts'
import Runs from '../components/runs'

export default class Home extends React.Component {
  render() {
    return (
      <Content title="Dashboard">
        <Stats/>
        <Alerts limit={5}/>
        <Runs limit={5}/>
      </Content>
    )
  }
}
