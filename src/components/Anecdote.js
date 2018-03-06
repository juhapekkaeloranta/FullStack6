import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'

class Anecdote extends React.Component {
  voteAnecdote = (id) => {
    return () => {
      console.log('Voted: ', id)
      console.log(this.props.store)
      this.props.store.dispatch(anecdoteVote(id))
    }
  }
  render() {
    return (
      <div key={this.props.anecdote.id} >
        <div>
          {this.props.anecdote.content}
        </div>
        <div>
          has {this.props.anecdote.votes}
          <button onClick={this.props.store.dispatch(this.props.anecdote.id)}>
            vote
          </button>
        </div>
      </div>
    )
  }
}

export default Anecdote