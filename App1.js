import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import List from './src/screens/List';
import Flex from './src/screens/Flex';

const App = () => {
  return (
    
    <View style={styles.card}>
    <Flex>  </Flex>
      <View style={styles.content}>
        <View style={styles.flexBox}>
          <View style={styles.colorBox('#F5F5DC', 10)} />
          <View style={styles.colorBox('#FFB000', 1)} />
        </View>
        <Image
          source={require('./src/assets/ers.jpg')}
          style={styles.photo}
        />
        <View style={styles.textContainer}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
           Erlangga Firmansyah
          </Text>
          <Text style={styles.text}>NIM: 201011450496</Text>
          <Text style={styles.text}>Phone:+62812355769</Text>
        </View>
        </View>
      
        <List/>
      
        <Text style={{ fontSize: 12, color: "#b4b4b4", paddingLeft: 10}}>{'MATA KULIAH SEMESTER INI'}</Text>
        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
            <Text>{'Mobile Programming'}</Text>
            <Text>{'3 SKS'}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
            <Text>{'Web Programming'}</Text>
            <Text>{'3 SKS'}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
            <Text>{'Quality Assurance'}</Text>
            <Text>{'3 SKS'}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
            <Text>{'Project Management'}</Text>
            <Text>{'3 SKS'}</Text>
          </View>
        </View>

      
    
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    borderWidth: 2, // Border width
    borderColor: 'transparent', // Border color
  },
  topBorder: {
    height: 8,
    backgroundColor: '#F5F5DC', // Warna atas border
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexBox: {
    flex: 10, // Rasio 10
    flexDirection: 'row',
  },
  colorBox: (color, flex) => ({
    backgroundColor: color,
    flex,
  }),
  textContainer: {
    marginLeft: 16,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  bottomBorder: {
    height: 8,
    backgroundColor: '#FFB000', // Warna bawah border
  },
});

export default App;