import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryTile = props => {
  return (
    <TouchableOpacity
      style={{
        ...styles.tileStyle,
        backgroundColor: props.item.color
      }}
      onPress={props.onSelect}
    >
      <View style={styles.gridItemStyle}>

        <Text style={styles.categoryName}> {props.item.title} </Text>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  gridItemStyle: {
    flex: 1,
    margin: 15,
    height: 130,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  tileStyle: {
    flex: 1,
    borderRadius: 10,
    elevation: 3,
    margin: 10
  },
  categoryName: {
    fontSize: 18,
  }
})

export default CategoryTile;