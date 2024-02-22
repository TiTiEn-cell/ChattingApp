import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import authenticationAPI from '../../apis/authApi';
import { LoadingScreen } from '..';

const initValue = {
  phoneNumber: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({navigation} : any) => {
  const [values, setValues] = useState(initValue)
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeValue = (key: string, value: string) =>{
    const data: any = {...values}
    data[`${key}`] = value;
    setValues(data);
  }
  const handleSignUp = async ()=>{
    setIsLoading(true)
    try {
      const res = await authenticationAPI.HandleAuthentication('/register', values, 'post');
      console.log(res);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <View>
      {/* Background image --------------------------------------------------------------------------*/}
      <ImageBackground
        source={require('../../assets/images/BackGround3.png')}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="stretch">

        {/* logo app ---------------------------------------------------------------------------------*/}
        <Image
          source={require('../../assets/images/TalksLogo.png')}
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: 58,
          }}
        />

        {/* white canvas -------------------------------------------------------------------------------- */}
        <View
          style={{
            alignItems: 'center',
            width: 300,
            height: 400,
            backgroundColor: 'white',
            borderRadius: 15,
            marginBottom: 10,
          }}>

          {/* Text Sign up -------------------------------------------------------------------------------*/}
          <Text
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 15,
            }}>
            Sign up
          </Text>

          {/* Phone input ----------------------------------------------------------------------------*/}
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
            }}>
            <Image
              source={require('../../assets/images/Icon_mail.png')}
              style={{
                position: 'absolute',
                top: 12,
                left: 5,
                width: 24,
                height: 24,
              }}
            />
            <TextInput
              style={{
                borderBottomWidth: 1,
                fontSize: 20,
                width: '90%',
                paddingBottom: 1,
                paddingLeft: 55,
              }}
              placeholder="Số điện thoại"
              value= {values.phoneNumber}
              onChangeText={val=>handleChangeValue('phoneNumber', val)}
            />
          </View>

          {/* Pass input---------------------------------------------------------------------------- */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/images/Icon_closed.png')}
              style={{
                position: 'absolute',
                top: 12,
                left: 5,
                width: 24,
                height: 24,
              }}
            />

            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 20,
                fontSize: 20,
                width: '90%',
                paddingBottom: 1,
                paddingLeft: 55,
              }}
              secureTextEntry
              placeholder="Mật khẩu"
              value= {values.password}
              onChangeText={val=>handleChangeValue('password', val)}
            />
          </View>

          {/* Retype pass input---------------------------------------------------------------------------- */}
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/images/Icon_closed.png')}
              style={{
                position: 'absolute',
                top: 12,
                left: 5,
                width: 24,
                height: 24,
              }}
            />

            <TextInput
              style={{
                borderBottomWidth: 1,
                marginBottom: 30,
                fontSize: 20,
                width: '90%',
                paddingBottom: 1,
                paddingLeft: 55,
              }}
              secureTextEntry
              placeholder="Nhập lại mật khẩu"
              value= {values.confirmPassword}
              onChangeText={val=>handleChangeValue('confirmPassword', val)}
            />
          </View>

          {/* Button sign up ------------------------------------------------------------------------------ */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7B39F5',
              borderRadius: 30,
              width: 271,
              height: 53,
            }}
            onPress={handleSignUp}
            >
            <Text
              style={{
                fontSize: 32,
                color: 'white',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Already have an account? -----------------------------------------------------------------------*/}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              marginRight: 5,
            }}>
            Already have an account?
          </Text>
          {/* Login ----------------------------------------------------------------------------------*/}
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}
              onPress={()=>navigation.navigate('LoginScreen')}
              >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <LoadingScreen visible = {isLoading}/>
    </View>
  );
};

export default SignUpScreen;
