import React, {useEffect} from 'react'
import {FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native'
import {Card, Text} from 'react-native-elements'
import {connect, useDispatch} from 'react-redux'
import {handleGetDecks} from '../actions'

const DeckList = ({decks, navigation}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.keys(decks).length === 0) {
      dispatch(handleGetDecks())
    }
  })

  const renderItem = ({item}) => {
    const {title, questions} = item
    return (
      <TouchableOpacity key={title} onPress={() => navigation.navigate('deck', {title})}>
        <Card key={title}>
          <Card.Title h3>{title}</Card.Title>
          <Card.Divider/>
          <View
            style={styles.center}
          >
            <Text h4>{questions.length} cards</Text>
          </View>
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

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
  },
})

function mapStateToProps(decks) {
  return {
    decks: decks ? Object.values(decks) : []
  }
}

export default connect(mapStateToProps)(DeckList)
