import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const VerificateScreen = ({navigation,route}:any) => {
  navigation = useNavigation();
  const {code, email, password} = route.params;

  const [codeValues, setCodeValues] = useState<String[]>([]);
  const [newCode, setNewCode] = useState('');

  const ref1 = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const ref4 = useRef<any>();

  useEffect(()=>{
    ref1.current.focus();
  },[])
  useEffect(()=>{
    let item = '';
    codeValues.forEach(val=>item += val)
    setNewCode(item);
  },[codeValues])


  const handleChangeCode = (val: string, index: number)=>{
    const data = [...codeValues];
    data[index] = val;
    setCodeValues(data)
  }

  const handleVerification = async() =>{
    console.log(newCode)
    if(newCode == code){
      console.log('Đăng ký thành công')
    }else{
      console.log('Đăng ký thất bại')
    }
  }
  return (
    <View> 
        {/* Background image --------------------------------------------------------------------------*/}
        <ImageBackground
        style={{
          backgroundColor: '#D1C2ED',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          {/* Nhập mã xác nhận --------------------------------------------------------------------------*/}
          <View style = {{
            backgroundColor: '#D9D9D9',
            width: Dimensions.get('screen').width,
            height: 76,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
            
            <TouchableOpacity 
            onPress={()=>navigation.goBack()}
            >
              <Image source={require('../../assets/images/Icon_left.png')}
              style = {{
                width: 36,
                height: 33,
                right: 80
              }}
              />
            </TouchableOpacity>
            <Text style = {{
              fontSize: 24,
              color: 'black',
              fontWeight: '500',
            }}>
              Nhập mã xác nhận 
            </Text>
            
          {/* xin vui lòng chờ text --------------------------------------------------------------------------*/}

          </View>
              <View style = {{
                justifyContent: 'center',
                alignItems: 'center',

              }}>
              <Text style = {styles.textLabel}>Mã xác nhận đã được gửi đến E-mail của bạn</Text>
              <Text style = {styles.textLabel}>Xin vui lòng chờ trong chút lát.</Text>
              </View>

          {/* Gmail --------------------------------------------------------------------------*/}
              <Text style = {styles.textLabel}>ntantai123321@gmail.com</Text>
              
          {/* Code input --------------------------------------------------------------------------*/}
          <View style = {{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: Dimensions.get('screen').width * 5/6, 
          }}>
          <TextInput keyboardType='number-pad' style = {styles.inputCode} ref={ref1} onChangeText={val=>{handleChangeCode(val,0); val.length > 0 && ref2.current.focus()}} maxLength={1} placeholder='-'/>
          <TextInput keyboardType='number-pad' style = {styles.inputCode} ref={ref2} onChangeText={val=>{handleChangeCode(val,1); val.length > 0 && ref3.current.focus()}} maxLength={1} placeholder='-'/>
          <TextInput keyboardType='number-pad'style = {styles.inputCode} ref={ref3} onChangeText={val=>{handleChangeCode(val,2); val.length > 0 && ref4.current.focus()}} maxLength={1} placeholder='-'/>
          <TextInput keyboardType='number-pad' style = {styles.inputCode} ref={ref4} onChangeText={val=> {handleChangeCode(val,3)}} maxLength={1} placeholder='-'/>

          </View>

          <TouchableOpacity style = {{
            width: 160,
            height: 53,
            borderWidth: 1,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#D9D9D9'
          }}
          disabled = {newCode.length != 4}
          onPress={()=>handleVerification()}
          >
            <Text style = {{
              fontSize: 24,
              color: 'black'
            }}>Kích hoạt</Text>
          </TouchableOpacity>
              
        </ImageBackground>
    </View>
  )
}

export default VerificateScreen

const styles = StyleSheet.create({
  textLabel:{
    fontSize: 15,
    color: 'black'
  },
  inputCode:{
    width:43,
    height: 41,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})