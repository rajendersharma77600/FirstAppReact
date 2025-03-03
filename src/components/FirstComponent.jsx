/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import { View, Text, Button, Alert } from 'react-native';
import React from 'react';
const FirstComponent = () => {
    return (
      <View>
        <Text>App Raj developer  React-Native</Text>
        <Text style={{fontSize:34}}>FirstComponent Call</Text>
        <Button Button={{Headers}}title='click me' onPress={()=>Alert.alert('Button Pressed')}></Button>
        <Button title='More Info' fontSize={{fontSize:24}}onPress={()=>Alert.alert('Info Get it successfully ')} color='red' ></Button>
      </View>
    );
  };
  export default FirstComponent;