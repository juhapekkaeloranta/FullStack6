const initialState = 'Notifications appear here'

const notificationReducer = (store = initialState, action) => {
  console.log(store)
  switch (action.type) {
    case 'SET': {
      return action.notificationText
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

export default notificationReducer