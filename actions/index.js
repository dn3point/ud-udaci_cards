import {_addCardToDeckDB, _getDecksDB, _saveDeckTitleDB} from '../utils/helps'

export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const GET_DECKS = 'GET_DECKS'

function getDecks(Decks) {
  return {
    type: GET_DECKS,
    Decks,
  }
}

export function handleGetDecks() {
  return (dispatch) => {
    return _getDecksDB().then((data) => {
      const Decks = JSON.parse(data)
      dispatch(getDecks(Decks))
    })
  }
}

function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function handleAddDeck(title) {
  return (dispatch) => {
    dispatch(addDeck(title))
    return _saveDeckTitleDB(title).then(() => {
    })
  }
}

function addQuestion({title, question}) {
  return {
    type: ADD_QUESTION,
    title,
    question,
  }
}

export function handleAddQuestion({title, question}) {
  return (dispatch) => {
    return _addCardToDeckDB({title, question}).then(() => {
      dispatch(addQuestion({title, question}))
    })
  }
}
