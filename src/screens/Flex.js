import React from 'react';
import {View} from 'react-native';

const Flex = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 10,
        flexDirection:'row',
      }}>
      <View style={{width: 100, height: 10, backgroundColor: 'green'}} />
      <View style={{width: 100, height: 10, backgroundColor: 'grey'}} />
      <View style={{width: 100, height: 10, backgroundColor: 'yellow'}} />
      <View style={{width: 100, height: 10, backgroundColor: 'red'}} />
    </View>
  );
};

export default Flex;
