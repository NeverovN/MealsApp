import React, {useEffect, useCallback} from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../templates/Colors";
import {useSelector, useDispatch} from "react-redux";
import {toggleFav} from "../store/actions/meals";

const RecipeScreen = props => {
  const mealId = props.navigation.getParam('id');
  const availableMeals = useSelector(state => state.meals.meals);
  const favMeals = useSelector(state => state.meals.favMeals);
  const currMeal = availableMeals.find(meal => meal.id === mealId);
  const isFav = favMeals.find(meal => meal.id === mealId) !== undefined;

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFav(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({tgFav: toggleFavHandler});
  }, [toggleFavHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: isFav});
  }, [isFav]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image source={{uri: currMeal.imgURL}} style={styles.image}/>
        <View style={styles.additionalContentStyle}>
          <Text style={styles.additionalTextStyle}>{currMeal.duration}m</Text>
          <Text style={styles.additionalTextStyle}>{currMeal.complex.toUpperCase()}</Text>
          <Text style={styles.additionalTextStyle}>{currMeal.afford.toUpperCase()}</Text>
        </View>
        <Text style={styles.subHeaderStyle}>INGREDIENTS</Text>
        {currMeal.ingredients.map((ingredient, index) => (
          <Text key={ingredient} style={styles.listTextStyle}>{index + 1}. {ingredient}</Text>
        ))}
        <Text style={styles.subHeaderStyle}>STEPS</Text>
        {currMeal.steps.map((step, index) => (
          <Text key={step} style={{...styles.listTextStyle, paddingVertical: 4}}>{index + 1}. {step}</Text>
        ))}
      </View>
    </ScrollView>
  );
}

RecipeScreen.navigationOptions = props => {
  const toggleFav = props.navigation.getParam('tgFav');
  const title = props.navigation.getParam('title');
  const isFav = props.navigation.getParam('isFav');
  return {
    headerTitle: title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='fav'
        iconName='ios-star'
        color= {isFav ? Colors.accentColor : Colors.mainColor}
        onPress={toggleFav}/>
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