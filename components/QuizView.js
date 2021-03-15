import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'
import {Button, Text} from 'react-native-elements'
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
    <View style={styles.center}>
      {currQuestion === questions.length && <View>
        <Text h2>Score: {correctCount}/{questions.length}</Text>
        {correctCount === questions.length && <Text h2>Congratulations!</Text>}
        <View style={styles.m_t_15}>
          <Button title='Restart Quiz' onPress={restartQuiz}/>
        </View>
        <View style={styles.m_t_15}>
          <Button title='Back to Deck' onPress={() => navigation.goBack()}/>
        </View>
      </View>}
      {currQuestion !== questions.length && <View>
        <Text>{currQuestion + 1}/{questions.length}</Text>
        <Text h2>{showAnswer ? questions[currQuestion].answer : questions[currQuestion].question}</Text>
        <View style={styles.m_t_15}>
          <Button title={showAnswer ? 'Question' : 'Answer'} type='clear'
                  onPress={() => setShowAnswer((current) => !current)}/>
        </View>
        <View style={styles.m_t_15}>
          <Button title='Correct' onPress={pressCorrect}/>
        </View>
        <View style={styles.m_t_15}>
          <Button title='Incorrect' onPress={pressIncorrect}/>
        </View>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'stretch',
    padding: 10,
  },
  m_t_15: {
    marginTop: 15
  }
})

function mapStateToProps(decks, { route }) {
  return {
    deck: decks[route.params.title]
  }
}

export default connect(mapStateToProps)(QuizView)
