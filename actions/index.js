import {_addCardToDeckDB, _getDecksDB, _removeDeckDB, _saveDeckTitleDB} from '../utils/helps'

export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'
export const GET_DECKS = 'GET_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'

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
    return _saveDeckTitleDB(title).then(() => {
      dispatch(addDeck(title))
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

function removeDeck(title) {
  return {
    type: REMOVE_DECK,
    title
  }
}

export function handleRemoveDeck(title) {
  return (dispatch) => {
    return _removeDeckDB(title).then(() => {
      dispatch(removeDeck(title))
    })
  }
}

function removeQuestion({title, question}) {
  return {
    type: REMOVE_QUESTION,
    title,
    question,
  }
}
