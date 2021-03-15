import React, {useState} from 'react'
import {View} from 'react-native'
import {Button, Input} from 'react-native-elements'
import {useDispatch} from 'react-redux'
import {handleAddQuestion} from '../actions'

const AddCard = ({ route, navigation }) => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()

  const addQuestion = () => {
    const deck = route.params.title
    dispatch(handleAddQuestion({title: deck, question: {question, answer}}))
    navigation.goBack()
  }

  return (
    <View>
      <Input placeholder='Question' value={question} onChangeText={(text) => setQuestion(text)}/>
      <Input placeholder='Answer' value={answer} onChangeText={(text) => setAnswer(text)}/>
      <Button title='Submit' onPress={addQuestion}/>
    </View>
  )
}

export default AddCard
