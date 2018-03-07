import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const notification = this.context.store.getState().notification
    const style = {
      backgroundColor: '#dbffc9',
      padding: 10,
      borderWidth: 1
    }

    const emptyStyle = {
      backgroundColor: '#ffffff',
      padding: 10,
      borderWidth: 1
    }

    const notificationElement = () => (
      <div style={style}>
        {notification}
      </div>
    )

    const notificationPlaceholder = () => (
      <div style={emptyStyle}>
        Select anecdote to vote!
      </div>
    )

    if (notification !== null) {
      return (
        notificationElement()
      )
    } else {
      return (
        notificationPlaceholder()
      )
    }
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
