import React from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { setFilter } from './reducers/filterReducer'
import Filter from './components/Filter'
import { anecdoteInitialization } from './reducers/anecdoteReducer'

class App extends React.Component {
  componentDidMount = () => {
    this.props.anecdoteInitialization()
  }

  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.props.store.dispatch(setFilter(event.target.value))
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <Filter />
        <Notification />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null,
  { anecdoteInitialization }
)(App)