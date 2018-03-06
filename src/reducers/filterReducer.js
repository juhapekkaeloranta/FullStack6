const initialState = ''

const filterReducer = (store = initialState, action) => {
  console.log('hello from filterReducer')
  console.log(store)
  switch (action.type) {
    case 'SETFILTER': {
      return action.filterText
    }
    default: {
      return store
    }
  }
}

export const setFilter = (filterText) => {
  console.log('hello from setFilter')
  return {
    type: 'SETFILTER',
    filterText
  }
}

export default filterReducer