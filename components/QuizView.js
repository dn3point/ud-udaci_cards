import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import {clearNotification, setNotification} from '../utils/notification'

const QuizView = ({navigation, deck}) => {
  const {questions} = deck

  const [currQuestion, setCurrQuestion] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const pressCorrect = () => {
    setCorrectCount((curr) => ++curr)
    setCurrQuestion((curr) => ++curr)
    setShowAnswer(false)
  }

  const pressIncorrect = () => {
    setCurrQuestion((curr) => ++curr)
    setShowAnswer(false)
  }

  const restartQuiz = () => {
    setCurrQuestion(0)
    setShowAnswer(false)
    setCorrectCount(0)
  }

  useEffect(() => {
    if (currQuestion === questions.length) {
      clearNotification().then(setNotification)
    }
  }, [currQuestion])

  return (
    <View>
      {currQuestion === questions.length && <View>
        <Text>Score: {correctCount}/{questions.length}</Text>
        {correctCount === questions.length && <Text>Congratulations!</Text>}
        <Button title='Restart Quiz' onPress={restartQuiz}/>
        <Button title='Back to Deck' onPress={() => navigation.goBack()}/>
      </View>}
      {currQuestion !== questions.length && <View>
        <Text>{currQuestion + 1}/{questions.length}</Text>
        <Text>{showAnswer ? questions[currQuestion].answer : questions[currQuestion].question}</Text>
        <Button title={showAnswer ? 'Question' : 'Answer'} onPress={() => setShowAnswer((current) => !current)}/>
        <Button title='Correct' onPress={pressCorrect}/>
        <Button title='Incorrect' onPress={pressIncorrect}/>
      </View>}
    </View>
  )
}

function mapStateToProps(decks, { route }) {
  return {
    deck: decks[route.params.title]
  }
}

export default connect(mapStateToProps)(QuizView)
