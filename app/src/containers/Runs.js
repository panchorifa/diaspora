import React from 'react'
import Content from '../components/Content'
import RunList from '../components/runs'

export default class Runs extends React.Component {
  render() {
    return (
      <Content title="Runs">
        <RunList/>
      </Content>
    )
  }
}
