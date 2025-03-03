/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
import FirstComponent from './src/components/FirstComponent';

const App = () => {
  return (
    <View>
      <Text>App Raj </Text>
      <Text style={{fontSize:34}}>App Dev developer</Text>
      <Button title='click me' onPress={()=>Alert.alert('Button Pressed')}></Button>
      <Button title='More Info' fontSize={{fontSize:24}}onPress={()=>Alert.alert('Info Get it successfully ')} color='red' ></Button>
      <FirstComponent/>
    </View>
  );
};


export default App;

