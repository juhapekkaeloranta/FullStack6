import React from 'react'
import Anecdote from './Anecdote'
import PropTypes from 'prop-types'
import { anecdoteVote } from '../reducers/anecdoteReducer'
import { notificationCreation, showNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'
//import { showNotification } from '../reducers/notificationReducer'

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
    const giveVote = async (anecdote) => {
      const votedAnecdote = await anecdoteService.vote(anecdote)
      this.props.anecdoteVote(votedAnecdote)
    }

    // This is notification logic in AnecdoteList?! -> refactor?
    /*const showNotification = (notificationMsg) => {
      this.props.notificationCreation(notificationMsg)
    }

    const resetNotificationsAfter = (seconds) => {
      const millisec = seconds * 1000
      setTimeout(() => {
        this.props.notificationCreation(null)
        console.log('notification reset!')
      }, millisec)
    }*/

    const notifyAndReset= (msg, time) => {
      console.log(this.props.anecdoteVote)
      console.log(this.props.showNotification)
      console.log(this.props)
      this.props.showNotification(msg, time)
    }

    return () => {
      giveVote(anecdote)
      const msg = 'You voted for: "' + anecdote.content + '"'
      notifyAndReset(msg, 3)
    }
  }

  render() {
    const anecdotes = this.props.anecdotes
    const filteringString = this.props.filter
    console.log(anecdotes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes
          .sort((a, b) => b.votes - a.votes)
          .filter(anecdote => anecdote.content.includes(filteringString))
          .map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={this.voteAnecdote(anecdote)} />
          )
        }
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  anecdoteVote,
  notificationCreation,
  showNotification
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdoteList