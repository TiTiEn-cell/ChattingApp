import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StartScreen } from './scr/screens'

const App = () => {
  return (
    <View>
    <StatusBar barStyle = 'dark-content' backgroundColor = 'purple'/>
    <StartScreen/>
    </View>
    
    
  )
}

export default App

const styles = StyleSheet.create({})