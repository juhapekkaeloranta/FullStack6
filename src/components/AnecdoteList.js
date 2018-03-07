import React from 'react'
import Anecdote from './Anecdote'
import PropTypes from 'prop-types'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationCreation } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  voteAnecdote = (anecdote) => {
    const store = this.context.store

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
    const anecdotes = this.context.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes
          .sort((a, b) => b.votes - a.votes)
          .filter(anecdote => anecdote.content.includes(this.context.store.getState().filter))
          .map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={this.voteAnecdote(anecdote)}/>
          )
        }
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList