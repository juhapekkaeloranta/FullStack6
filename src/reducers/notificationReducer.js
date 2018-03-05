const initialState = 'Notifications appear here'

const notificationReducer = (store = initialState, action) => {
  console.log(store)
  if (action.type==='SET') {
    return action.notificationText
  }

  return store
}

export const notificationCreation = (text) => {
  return {
    type: 'SET',
    text
  }
}

export default notificationReducer