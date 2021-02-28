import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const RecipeScreen = props => {
  const meal = props.navigation.getParam('item');

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={{uri: meal.imgURL}} style={styles.image}/>
        <View style={styles.additionalContentStyle}>
          <Text style={styles.additionalTextStyle}>{meal.duration}m</Text>
          <Text style={styles.additionalTextStyle}>{meal.complex.toUpperCase()}</Text>
          <Text style={styles.additionalTextStyle}>{meal.afford.toUpperCase()}</Text>
        </View>
        <Text style={styles.subHeaderStyle}>INGREDIENTS</Text>
        {meal.ingredients.map((ingredient, index) => (
          <Text key={ingredient} style={styles.listTextStyle}>{index+1}.  {ingredient}</Text>
        ))}
        <Text style={styles.subHeaderStyle}>STEPS</Text>
        {meal.steps.map((step, index) => (
          <Text key={step} style={{...styles.listTextStyle, paddingVertical: 4}}>{index + 1}.  {step}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

RecipeScreen.navigationOptions = props => {
  const meal = props.navigation.getParam('item');
  return {
    headerTitle: meal.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='fav'
        iconName='ios-star'
        onPress={() => {
          meal.isFavourite = true;
        }}/>
    </HeaderButtons>
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 220,
  },
  additionalTextStyle: {
    fontFamily: 'open-sans'
  },
  additionalContentStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    height: '15%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subHeaderStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    paddingVertical: 10,
  },
  listTextStyle: {
    paddingLeft: 10,
    paddingVertical: 2,
  }
});

export default RecipeScreen;