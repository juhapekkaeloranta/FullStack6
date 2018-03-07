import React from 'react'

class Anecdote extends React.Component {
  render() {
    return (
      <div key={this.props.anecdote.id} >
        <div>
          {this.props.anecdote.content}
        </div>
        <div>
          has {this.props.anecdote.votes}
          <button onClick={this.props.handleVote}>
            vote
          </button>
        </div>
      </div>
    )
  }
}

export default Anecdote