import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen, SignUpScreen, StartScreen, VerificateScreen } from '../screens'


const AuthNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name='StartScreen' component={StartScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
        <Stack.Screen name='VerificateScreen' component={VerificateScreen}/>

    </Stack.Navigator>
  )
}

export default AuthNavigator