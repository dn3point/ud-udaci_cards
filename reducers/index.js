import {ADD_DECK, ADD_QUESTION, GET_DECKS} from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      const qs = state && state[action.title] && state[action.title].questions ? state[action.title].questions : []
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: qs
        }
      }
    case ADD_QUESTION:
      if (state[action.title] === undefined) {
        return state
      }
      const questions = state[action.title].questions
      questions.push(action.question)
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions
        }
      }
    case GET_DECKS:
      return action.Decks
    default:
      return state
  }
}
