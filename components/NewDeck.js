import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {Button, Input, Text} from 'react-native-elements'
import {handleAddDeck} from '../actions'
import {useDispatch} from 'react-redux'

const NewDeck = ({navigation}) => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const createDeck = () => {
    dispatch(handleAddDeck(title)).then(() => navigation.navigate('deck', {title}))
  }

  return (
    <View style={styles.center}>
      <Text h2 style={{padding: 10}}>What it the title of your new deck?</Text>
      <Input placeholder='Deck Title' value={title} onChangeText={(text) => setTitle(text)}/>
      <Button title='Create Deck' onPress={createDeck}/>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  m_t_15: {
    marginTop: 15
  },
})

export default NewDeck
