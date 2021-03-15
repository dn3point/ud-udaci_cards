import React from 'react'
import {connect, useDispatch} from 'react-redux'
import {View} from 'react-native'
import {Button, Text} from 'react-native-elements'
import {handleRemoveDeck} from '../actions'

const DeckDetail = ({ deck, navigation }) => {
  const {title, questions} = deck
  const dispatch = useDispatch()

  const removeDeck = () => {
    dispatch(handleRemoveDeck(title))
    navigation.navigate('list')
  }

  return (
    <View>
      <Text h1>{title}</Text>
      <Text h2>{questions.length} cards</Text>
      <Button title='Add Card' onPress={() => navigation.navigate('add', {title})}/>
      <Button title='Start Quiz' disabled={questions.length === 0}
              onPress={() => navigation.navigate('quiz', {title})}/>
      <Button title='Remove Deck' onPress={removeDeck}/>
    </View>
  )
}

function mapStateToProps(decks, { route }) {
  return {
    deck: decks[route.params.title],
  }
}

export default connect(mapStateToProps)(DeckDetail)
