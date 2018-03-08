const initialState = null

const notificationReducer = (store = initialState, action) => {
  switch (action.type) {
    case 'SET': {
      return action.text
    }
    default: {
      return store
    }
  }
}

export const notificationCreation = (text) => {
  return {
    type: 'SET',
    text
  }
}

export const showNotification = (text, time) => {
  return async (dispatch) => {
    await setTimeout(() => {
      const empty = null
      dispatch({
        type: 'SET',
        text: empty
      })
      console.log('notification reset!')
    }, time * 1000)

    dispatch({
      type: 'SET',
      text: text
    })
  }
}

export default notificationReducer