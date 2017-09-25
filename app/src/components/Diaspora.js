import React from 'react'
import {loadStream} from '../actions'
import Post from './Post'
import Spinner from './Spinner'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  header: {
    position: 'fixed', heigh: '4em', width: '100%',
    backgroundColor: '#000', color: '#fff', top: 0, left: 0
  }
})

export default class Diaspora extends React.Component {
  constructor(props) {
    super(props)
    this.state = {stream: null}
  }
  async componentWillMount() {
    console.log('Loading Stream...')
    const stream = await loadStream()
    console.log(stream)
    this.setState({stream: stream})
  }

  render() {
    const stream = this.state.stream
    return (
      <div>
        <div className={css(styles.header)}>
          <h1 style={{padding: '0 1em'}}>Diaspora Crawler</h1>
        </div>
        <div style={{height: '5em'}}/>
        {!stream && <Spinner/>}
        {stream && stream.map((p, i) => (
          <Post p={p}/>
        ))}
      </div>
    )
  }
}
