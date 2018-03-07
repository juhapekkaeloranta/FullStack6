import React from 'react'
import PropTypes from 'prop-types'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  resetInputField = (inputField) => {
    inputField.value = ''
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    this.resetInputField(event.target.anecdoteInput)

    const newAnecdote = await anecdoteService.createNew(content)
    console.log(newAnecdote)
    this.props.anecdoteCreation(newAnecdote)
  }

  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdoteInput' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = {
  anecdoteCreation
}

const ConnectedAnecdoteForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm