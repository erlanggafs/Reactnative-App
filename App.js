import React from "react";
import { SafeAreaView, StyleSheet, Text, View,Img } from 'react-native';
import List from "./src/screens/List";


const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView>
      
        <View style={{flexDirection: "row",}}>
          <View style={style.square}/>
          <View style={style.square2}/>
          <View style={style.square3}/>
          <View style={style.square4}/>      
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

      
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
        
        square : {
            width: 100,
            height:10,
            backgroundColor: '#004225'
        },
        square2 : {
            width: 100,
            height:10,
            backgroundColor: '#F5F5DC'
        },
        square3 : {
            width: 100,
            height:10,
            backgroundColor: '#FFB000'
        },
        square4 : {
            width: 100,
            height:10,
            backgroundColor: '#FFCF9D'
        }
    })

export default App;