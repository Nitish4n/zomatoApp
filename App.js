import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import NavigationStack from './navigation/index';
import {Provider} from 'react-redux'
import store from './redux/store';

const App = () => {
  
  return (
    <Provider store={store}>
        <NavigationStack />
    </Provider>
      
  )
}

export default App

const styles = StyleSheet.create({})
