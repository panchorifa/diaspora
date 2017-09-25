import React from 'react'
import {StyleSheet,css} from 'aphrodite'
// import './Post.css'

const styles = StyleSheet.create({
  post: {
    margin: '1em',
    padding: '1em',
    borderBottom: '1px solid #ddd'
  }
})

export default class Post extends React.Component {
  render() {
    const p = this.props.p
    return (
      <div className={css(styles.post)}>
        <div className="d-flex justify-content-space-between">
          <div>{p.post_time}</div>
          <div>{p.author_name}</div>
        </div>
        <div>{p.post_text}</div>
        <div>{p.post_tags}</div>
      </div>
    )
  }
}
