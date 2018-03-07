import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { setFilter } from './reducers/filterReducer'
import Filter from './components/Filter'

class App extends React.Component {
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

export default App