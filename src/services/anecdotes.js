import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const newObject = { content: content, id: getId(), votes: 0 }
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

const vote = async (anecdote) => {
  const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
  const response = await axios.put(baseUrl+anecdote.id, votedAnecdote)
  return response.data
}

export default {
  getAll, createNew, vote
}