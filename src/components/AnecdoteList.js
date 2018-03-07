import React from 'react'
import Anecdote from './Anecdote'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationCreation } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  voteAnecdote = (anecdote) => {
    const store = this.props.store

    const giveVote = (id) => {
      console.log('liked from AnecdoteList')
      store.dispatch(anecdoteVote(id))
    }

    // This is notification logic in AnecdoteList?! -> refactor?
    const showNotification = (notificationMsg) => {
      store.dispatch(notificationCreation(notificationMsg))
    }

    const resetNotificationsAfter = (seconds) => {
      const millisec = seconds*1000
      setTimeout(() => {
        store.dispatch(notificationCreation(null))
        console.log('notification reset!')
      }, millisec)
    }

    return () => {
      giveVote(anecdote.id)
      showNotification('You voted for: "' + anecdote.content + '"')
      resetNotificationsAfter(3)
    }
  }

  render() {
    const anecdotes = this.props.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes
          .sort((a, b) => b.votes - a.votes)
          .filter(anecdote => anecdote.content.includes(this.props.store.getState().filter))
          .map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} store={this.props.store} handleVote={this.voteAnecdote(anecdote)}/>
          )
        }
      </div>
    )
  }
}

export default AnecdoteList