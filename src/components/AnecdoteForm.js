import React from 'react'
import PropTypes from 'prop-types'
import { anecdoteCreation } from '../reducers/anecdoteReducer'

class AnecdoteForm extends React.Component {
  resetInputField = (inputField) => {
    inputField.value = ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteInput.value
    this.context.store.dispatch(anecdoteCreation(content))
    this.resetInputField(event.target.anecdoteInput)
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

export default AnecdoteForm