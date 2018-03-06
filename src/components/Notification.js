import React from 'react'

class Notification extends React.Component {
  render() {
    const notification = this.props.store.getState().notification
    const style = {
      backgroundColor: '#dbffc9',
      padding: 10,
      borderWidth: 1
    }

    const notificationElement = () => (
      <div style={style}>
        {notification}
      </div>
    )

    if (notification !== null) {
      return (
        notificationElement()
      )
    } else {
      return null
    }
  }
}

export default Notification
