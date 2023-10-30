import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const App = () => {
  const [input, setInput] = useState();
  console.log('render');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder={'Masukkan keyword'}
        value={input}
        onChangeText={val => setInput(val)}
        style={{fontSize: 30}}
      />
    </View>
  );
};

export default App;
