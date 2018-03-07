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

export default notificationReducer