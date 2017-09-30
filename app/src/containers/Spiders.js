import React from 'react'
import Content from '../components/Content'
import SpidersHome from '../components/spiders'


export default class Spiders extends React.Component {
  render() {
    return (
      <Content title="Spiders" button={'Add Spider'}>
        <SpidersHome/>
      </Content>
    )
  }
}
