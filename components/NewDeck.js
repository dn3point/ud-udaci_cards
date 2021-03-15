import React, {useState} from 'react'
import {View} from 'react-native'
import {Button, Input, Text} from 'react-native-elements'
import {handleAddDeck} from '../actions'
import {connect, useDispatch} from 'react-redux'

const NewDeck = ({navigation}) => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const createDeck = () => {
    dispatch(handleAddDeck(title)).then(() => navigation.navigate('deck', {title}))
  }

  return (
    <View>
      <Text h1>What it the title of your new deck</Text>
      <Input placeholder='Deck Title' value={title} onChangeText={(text) => setTitle(text)}/>
      <Button title='Create Deck' onPress={createDeck}/>
    </View>
  )
}

export default connect()(NewDeck)
