import {ADD_DECK, ADD_QUESTION, GET_DECKS, REMOVE_DECK, REMOVE_QUESTION} from '../actions'

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      const qs = state[action.title] && state[action.title].questions ? state[action.title].questions : []
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: qs
        }
      }
    case REMOVE_DECK:
      delete state[action.title]
      return state
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
    case REMOVE_QUESTION:
      if (state[action.title] === undefined) {
        return state
      }
      let questionArr = state[action.title].questions
      questionArr = questionArr.filter((question) => question.question !== action.question)
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: questionArr
        }
      }
    case GET_DECKS:
      return action.Decks
    default:
      return state
  }
}
