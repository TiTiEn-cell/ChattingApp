import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LoginScreen, StartScreen } from './scr/screens'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import TabNavigator from './scr/navigators/TabNavigator'
import AuthNavigator from './scr/navigators/AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import SignUpScreen from './scr/screens/auth/SignUpScreen'

const App = () => {
  const [accessToken, setAccessToken] = useState('')
  const {getItem, setItem} = useAsyncStorage('assetToken')


  useEffect(() =>{
    checkLogin();
  }, [] )

    const checkLogin = async () =>{
      const token = await getItem();
      token && setAccessToken(token);
}
  return (
    <>
    <StatusBar barStyle = 'dark-content' backgroundColor = 'transparent' translucent/>
    <NavigationContainer>
      {accessToken ? <TabNavigator/> : <SignUpScreen/>}
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})