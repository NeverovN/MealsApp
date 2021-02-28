import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../templates/Colors";

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> Filters Screen </Text>
    </View>
  );
}

FiltersScreen.navigationOptions = props => {
  return {
    headerTitle: 'Filters',

    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName='ios-menu'
          title='Menu'
          onPress={() => {
          props.navigation.toggleDrawer();
        }}/>
      </HeaderButtons>)
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default FiltersScreen;