import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {HomeScreen, LoginScreen, StartScreen, VertifyScreen} from './scr/screens';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import TabNavigator from './scr/navigators/TabNavigator';
import AuthNavigator from './scr/navigators/AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from './scr/screens/auth/SignUpScreen';
import {Provider} from 'react-redux';
import store from './scr/redux/store';
import AppRouters from './scr/navigators/AppRouters';

const App = () => {
  const {getItem, setItem} = useAsyncStorage('assetToken');


  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={store}>
        <NavigationContainer>
          <AppRouters/>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
