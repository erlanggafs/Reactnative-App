import React from 'react';
import {Image, View} from 'react-native';
import {testLogo} from '../assets';

const Img = () => {
  return (
    <View style={{flex: 1,
     justifyContent: 'center', alignItems: 'flex-start'}}>
      <Image source={testLogo} style={{width: 100, height: 100}} />
    </View>
  );
};

export default Img;
