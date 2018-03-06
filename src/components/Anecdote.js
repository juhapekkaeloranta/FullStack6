import React from 'react'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationCreation } from '../reducers/notificationReducer'

class Anecdote extends React.Component {
  voteAnecdote = (anecdote) => {
    const store = this.props.store

    const resetNotificationsAfter = (seconds) => {
      setTimeout(() => {
        store.dispatch(notificationCreation(null))
      }, seconds*1000)
    }

    return () => {
      console.log('Voted: ', anecdote.id, anecdote.content)
      console.log(this.props.store)
      store.dispatch(anecdoteVote(anecdote.id))
      store.dispatch(notificationCreation('You voted for: "' + anecdote.content + '"'))

      resetNotificationsAfter(3)
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
          <button onClick={this.voteAnecdote(this.props.anecdote)}>
            vote
          </button>
        </div>
      </div>
    )
  }
}

export default Anecdote