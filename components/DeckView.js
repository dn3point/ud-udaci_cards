import React from 'react'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import {connect} from 'react-redux'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import DeckDetail from './DeckDetail'
import AddCard from './AddCard'
import QuizView from './QuizView'
import {Platform} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator()
const Stack = createStackNavigator()

const DecksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='list' component={DeckList} options={{headerTitle: 'UdaciCards'}}/>
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
      <Stack.Screen name='new' component={NewDeck} options={{headerTitle: 'UdaciCards'}}/>
      <Stack.Screen name='deck' component={DeckDetail}
                    options={({ route }) => ({ title: route.params.title })}/>
    </Stack.Navigator>
  )
}

const DeckView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Decks' component={DecksStack}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name='home' color={color} size={23} />
                    ),
                  }}/>
      <Tab.Screen name='New Deck' component={NewDeckStack}
                  options={{
                    tabBarIcon: ({ color }) => (
                      <Ionicons name='create' color={color} size={23} />
                    ),
                  }}/>
    </Tab.Navigator>
  )
}

export default connect()(DeckView)
