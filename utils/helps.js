import AsyncStorage from '@react-native-community/async-storage'

export const DECK_KEY = 'DECK'

export const _getDecksDB = () => {
  return AsyncStorage.getItem(DECK_KEY)
}

export const _saveDeckTitleDB = (title) => {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    },
  }))
}

export const _addCardToDeckDB = ({title, question}) => {
  return _getDecksDB().then((results) => {
    const data = JSON.parse(results)
    const deck = data[title]
    const questions = deck.questions
    questions.push(question)
    data[title] = {
      title,
      questions,
    }
    AsyncStorage.setItem(DECK_KEY, JSON.stringify(data))
  })
}
