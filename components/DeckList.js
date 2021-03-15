import React, {useEffect} from 'react'
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {Card} from 'react-native-elements'
import {connect, useDispatch} from 'react-redux'
import {handleGetDecks} from '../actions'
import {useIsFocused} from '@react-navigation/core'

const DeckList = ({decks, navigation}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.keys(decks).length === 0) {
      dispatch(handleGetDecks())
    }
  })

  const isFocused = useIsFocused()

  useEffect(() => {
    dispatch(handleGetDecks())
  } , [isFocused])

  const renderItem = ({item}) => {
    const {title, questions} = item
    return (
      <TouchableOpacity key={title} onPress={() => navigation.navigate('deck', {title})}>
        <Card key={title}>
          <Card.Title>{title}</Card.Title>
          <Card.Divider/>
          <Text>{questions.length} cards</Text>
        </Card>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView>
      <FlatList
        data={decks}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  )
}

function mapStateToProps(decks) {
  return {
    decks: decks ? Object.values(decks) : []
  }
}

export default connect(mapStateToProps)(DeckList)
