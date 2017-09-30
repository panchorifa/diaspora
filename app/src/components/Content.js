import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet,css} from 'aphrodite'

const styles = StyleSheet.create({
  section: {
    margin: '1em'
  },
  content: {
    marginTop: '3em'
  }
})

class Content extends React.Component {
  render() {
    const listmode = this.props.mode === 'list'
    const buttonText = this.props.button
    return (
      <div className={css(styles.section)}>
        <div className={css(styles.content)}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    mode: store.app.mode
  }
}

export default connect(mapStateToProps)(Content)
