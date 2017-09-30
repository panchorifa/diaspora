import React from 'react'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  link:{
    textDecoration: 'underline',

  }
})

export default class Breadcrumbs extends React.Component {
  render() {
    return (
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a className={css(styles.link)}>Add Spider</a>
        </li>
      </ol>
    )
  }
}
