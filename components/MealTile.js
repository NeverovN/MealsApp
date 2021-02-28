import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground, StyleSheet} from 'react-native'

const MealTile = props => {
  return (
    <View style={styles.tileStyle}>
      <TouchableOpacity onPress={props.onSelect} style={{flex: 1}}>
        <View style={styles.mainContentStyle}>
          <ImageBackground source={{uri: props.item.imgURL}} style={styles.bgImage}>
            <Text numberOfLines={1} style={styles.titleTextStyle}> {props.item.title} </Text>
          </ImageBackground>
        </View>
        <View style={styles.additionalContentStyle}>
          <Text style={styles.additionalTextStyle}>{props.item.duration}m</Text>
          <Text style={styles.additionalTextStyle}>{props.item.complex.toUpperCase()}</Text>
          <Text style={styles.additionalTextStyle}>{props.item.afford.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    tileStyle: {
      flex: 1,
      width: '100%',
      height: 200,
      backgroundColor: '#b3b3b380',
      marginVertical: 5,
      borderRadius: 7,
    },
    mainContentStyle: {
      height: '85%',
    },
    bgImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    additionalContentStyle: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 20,
      height: '15%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    titleTextStyle: {
      fontSize: 20,
      backgroundColor: 'rgba(226,192,163,0.5)',
      fontFamily: 'open-sans'
    },
    additionalTextStyle: {
      fontFamily: 'open-sans'
    }
  })
;

export default MealTile;
