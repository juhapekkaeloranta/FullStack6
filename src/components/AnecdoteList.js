import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
  voteAnecdote = (id) => {
    return () => {
      console.log('Voted: ', id)
      console.log(this.props.store)
      this.props.store.dispatch(anecdoteVote(id))
    }
  }

  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <Anecdote key={anecdote.id} anecdote={anecdote} store={this.props.store} />
        )}
      </div>
    )
  }
}

export default AnecdoteList