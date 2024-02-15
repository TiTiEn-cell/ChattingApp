import { View, Text, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { appColor } from '../constants/appColor'

const StartScreen = () => {
  return (
    <View>
      
      <ImageBackground
      source={require('../assets/images/Background.png')}
      style = {{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Image
        source={require('../assets/images/LogoCat.png')}
        style = {{
          width: 180,
          height: 135,
          position: 'absolute',
          top: 144
        }}
        />

        <View style = {{
          position: 'absolute',
          top: 472,
        }}>

      <TouchableOpacity style = {{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7B39F5',
            borderRadius: 30,
            width: 271,
            height: 53,

          }}>
            <Text style = {{
              fontSize: 32,
              color: 'white'
            }}>Login</Text>
      </TouchableOpacity>
        </View>

        <View style = {{
          position: 'absolute',
          top: 550,
        }}>

      <TouchableOpacity style = {{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7B39F5',
            borderRadius: 30,
            width: 271,
            height: 53,
          }}>
            <Text style = {{
              fontSize: 32,
              color: 'white'
            }}>Sign up</Text>
      </TouchableOpacity>
        </View>

        
      </ImageBackground>
    </View>
  )
}

export default StartScreen