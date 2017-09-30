import React from 'react'
import {withRouter} from 'react-router-dom'
import Content from '../components/Content'
import SpiderHome from '../components/spiders/Single'

class Spider extends React.Component {
  render() {
    const id = this.props.match.params.id
    return (
      <Content title={"Spider "+id}>
        <SpiderHome/>
      </Content>
    )
  }
}

export default withRouter(Spider)
