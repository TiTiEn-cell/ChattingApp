import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';

interface Props {
  visible: boolean;
  mess?: string;
}

const LoadingScreen = (props: Props) => {
  const {visible, mess} = props;
  return (
    <Modal visible={visible} style={{flex: 1}} transparent statusBarTranslucent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={'white'} size={32} />
        <Text
          style={{
            color: 'white',
          }}>
          Loading
        </Text>
      </View>
    </Modal>
  );
};

export default LoadingScreen;
