import React, {useEffect} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import middleware from './middleware'
import DeckView from './components/DeckView'
import reducer from './reducers'
import {NavigationContainer} from '@react-navigation/native'
import {setNotification} from './utils/notification'

const App = () => {
  const store = createStore(reducer, middleware)
  useEffect(() => {
    setNotification()
  })
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DeckView/>
      </NavigationContainer>
    </Provider>
  )
}

export default App
