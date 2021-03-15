import React from 'react'
import {connect} from 'react-redux'
import {StyleSheet, View} from 'react-native'
import {Button, Text} from 'react-native-elements'

const DeckDetail = ({ deck, navigation }) => {
  const {title, questions} = deck

  return (
    <View style={styles.center}>
      <Text h2>{title}</Text>
      <View style={styles.m_t_15}>
        <Text h4>{questions.length} cards</Text>
      </View>
      <View style={[styles.row, styles.m_t_15]}>
        <View style={styles.m_r_5}>
          <Button title='Add Card' onPress={() => navigation.navigate('add', {title})}/>
        </View>
        <View style={styles.m_l_5}>
          <Button title='Start Quiz' type='outline' disabled={questions.length === 0}
                  onPress={() => navigation.navigate('quiz', {title})}/>
        </View>
      </View>
    </View>
  )
}

function mapStateToProps(decks, { route }) {
  return {
    deck: decks[route.params.title],
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  m_t_15: {
    marginTop: 15
  },
  m_r_5: {
    marginRight: 5
  },
  m_l_5: {
    marginLeft: 5
  }
})

export default connect(mapStateToProps)(DeckDetail)
