import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { addAuth, authSelector } from '../redux/reducers/authReducer'

const AppRouters = () => {

    const {getItem} = useAsyncStorage('auth')

    const auth = useSelector(authSelector);
    const dispatch = useDispatch();

    console.log(auth);

    useEffect(()=>{
        checkLogin();
    },[])

const checkLogin = async ()=>{
        const res = await getItem();

        res && dispatch(addAuth(JSON.parse(res)))
    }

  return <>
  {auth.accesstoken ? <TabNavigator /> : <AuthNavigator />}
  </>

      

  
}

export default AppRouters