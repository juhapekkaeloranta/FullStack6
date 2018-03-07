import React from 'react'
import PropTypes from 'prop-types'
import { setFilter } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.context.store.dispatch(setFilter(event.target.value))
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        filter: <input type="text" name="FirstName" onChange={this.handleFilterChange} value={this.context.store.getState().filter}/>
      </div>
    )
  }
}

Filter.contextTypes = {
  store: PropTypes.object
}

export default Filter