import React, {useState} from 'react';
import {Text, View, Switch, StyleSheet} from 'react-native';
import Colors from "../templates/Colors";

const Switcher = props => {

  return (<View style={styles.switchContainerStyle}>
    <Text style={styles.textStyle}>{props.children}</Text>
    <Switch
      value={props.value}
      onValueChange={props.onChange}
      thumbColor={Colors.mainColor}
      trackColor={{false: 'default', true: Colors.mainColorLight}}
    />
  </View>);
}

const styles = StyleSheet.create({
  switchContainerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textStyle: {
    fontFamily: 'open-sans',
    fontSize: 18,
  },
  switchStyle: {

  }
});

export default Switcher;
