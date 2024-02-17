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

const LoginScreen = () => {
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
          {/* Text Login -------------------------------------------------------------------------------*/}
          <Text
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'black',
              marginBottom: 15,
            }}>
            Login
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
                marginBottom: 20,
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

          {/* Forgot password ------------------------------------------------------------------------------- */}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
              marginBottom: 30,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
              }}>
              Forgot password
            </Text>

            {/* Remember me ------------------------------------------------------------------------------ */}
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={toggleCheckBox}>
              <View
                style={{
                  width: 14,
                  height: 14,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 5,
                  backgroundColor: '#6FD7FE',
                  borderRadius: 3,
                }}>
                {checked && (
                  <Text
                    style={{
                      fontSize: 9,
                    }}>
                    X
                  </Text>
                )}
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                }}>
                Remember me
              </Text>
            </TouchableOpacity>
          </View>

          {/* Button Login ------------------------------------------------------------------------------ */}
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
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Don't have an account text*/}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              marginRight: 5
            }}>
            Don’t have an account?
          </Text>
          {/* Register */}
          <TouchableOpacity>
            <Text style = {{
              fontSize: 16,
              fontWeight: 'bold',
            }}>Register</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
