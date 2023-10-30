import React from 'react';
import {FlatList, Text, View} from 'react-native';

const List = () => {
  const data = [
  ];
  const renderItem = ({item, index}) => {
    return (
      <View style = {{flex:1,flexDirection:'row',padding: 16, margin:16,justifyContent:'space-between'}}>
        <View style={{flexDirection: 'row'}}>
        <Text>{item}</Text>
      </View>
      </View>

    );
  };

  return <FlatList data={data} renderItem={renderItem} />;
};

export default List;
