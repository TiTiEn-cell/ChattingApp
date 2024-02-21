import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const StartScreen = ({navigation}: any) => {
  return (
    <View>
      {/* Background image ------------------------------------------------------------------------------ */}
      <ImageBackground
        source={require('../assets/images/BackGround3.png')}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="stretch">
        {/* logo app -------------------------------------------------------------------------------- */}
        <Image
          source={require('../assets/images/TalksLogo.png')}
          style={{
            width: 100,
            height: 100,
            position: 'absolute',
            top: 144,
          }}
        />

        <View
          style={{
            position: 'absolute',
            top: 472,
          }}>
          {/* Button login ------------------------------------------------------------------------ */}
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7B39F5',
              borderRadius: 30,
              width: 271,
              height: 53,
            }}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text
              style={{
                fontSize: 32,
                color: 'white',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Button login ------------------------------------------------------------------------ */}
        <View
          style={{
            position: 'absolute',
            top: 550,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#7B39F5',
              borderRadius: 30,
              width: 271,
              height: 53,
            }}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text
              style={{
                fontSize: 32,
                color: 'white',
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;
