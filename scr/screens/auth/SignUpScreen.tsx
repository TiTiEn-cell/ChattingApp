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

const SignUpScreen = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckBox = () => {
    setChecked(!checked);
  };
  return (
    <View>
      {/* Background image --------------------------------------------------------------------------*/}
      <ImageBackground
        source={require('../../assets/images/Background2.png')}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="stretch">

        {/* logo app ---------------------------------------------------------------------------------*/}
        <Image
          source={require('../../assets/images/LogoCat.png')}
          style={{
            width: 180,
            height: 135,
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
            }}>
            <Text
              style={{
                fontSize: 32,
                color: 'white',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        {/* Already have an account?*/}
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
          {/* Login */}
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;
