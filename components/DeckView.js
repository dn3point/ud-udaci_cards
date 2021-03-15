import React from 'react'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import {connect} from 'react-redux'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import QuizView from './QuizView'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const DecksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='list' component={DeckList} options={{headerShown: false}}/>
      <Stack.Screen name='deck' component={DeckDetail}
                    options={({ route }) => ({ title: route.params.title })}/>
      <Stack.Screen name='add' component={AddCard} options={{headerTitle: 'Add Card'}}/>
      <Stack.Screen name='quiz' component={QuizView} options={{headerTitle: 'Quiz'}}/>
    </Stack.Navigator>
  )
}

const NewDeckStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='new' component={NewDeck} options={{headerShown: false}}/>
      <Stack.Screen name='deck' component={DeckDetail}
                    options={({ route }) => ({ title: route.params.title })}/>
    </Stack.Navigator>
  )
}

const DeckView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Decks' component={DecksStack}/>
      <Tab.Screen name='New Deck' component={NewDeckStack} />
    </Tab.Navigator>
  )
}

export default connect()(DeckView)
