import React from 'react'
import { setFilter } from '../reducers/filterReducer'

class Filter extends React.Component {
  handleFilterChange = (event) => {
    console.log(event.target.value)
    this.props.store.dispatch(setFilter(event.target.value))
  }

  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        <input type="text" name="FirstName" onChange={this.handleFilterChange} value={this.props.store.getState().filter}/>
      </div>
    )
  }
}

export default Filter