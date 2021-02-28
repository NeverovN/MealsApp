import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const RecipeScreen = props => {
  const meal = props.navigation.getParam('item');

  return (
    <View style={ styles.screen }>
      <Text> {meal.title} </Text>
      <Button title='Go To Menu' onPress={() => props.navigation.popToTop()} />
    </View>
  );
}

RecipeScreen.navigationOptions = props => {
  const meal = props.navigation.getParam('item');
  return {
    headerTitle: meal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='fav' iconName='ios-star' onPress={() => {
        meal.isFavourite = true;
      }} />
    </HeaderButtons>
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default RecipeScreen;