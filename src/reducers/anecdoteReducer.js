import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (store = [], action) => {
  //console.log(store)
  switch (action.type) {
    case 'VOTE': {
      const old = store.filter(a => a.id !== action.id)
      const voted = store.find(a => a.id === action.id)
      return [...old, { ...voted, votes: voted.votes + 1 }]
    }
    case 'CREATE': {
      return [...store, action.object]
    }
    case 'INIT_ANECDOTES': {
      return action.data
    }
    default: {
      return store
    }
  }
}

export const anecdoteCreation = (object) => {
  return {
    type: 'CREATE',
    object
  }
}

export const anecdoteVote = (anecdote) => {
  return {
    type: 'VOTE',
    id: anecdote.id
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotesFromDB = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotesFromDB
    })
  }
}

export default anecdoteReducer