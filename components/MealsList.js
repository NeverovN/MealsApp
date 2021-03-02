import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import MealTile from "./MealTile";
import { useSelector } from "react-redux";

const MealsList = props => {

  const favMeals = useSelector(state => state.meals.favMeals);

  const renderMealItem = itemData => {
    console.log(itemData.item.title);

    return <MealTile item={itemData.item} onSelect={() => {
      const isFav = favMeals.find(meal => meal.id === itemData.item.id);
      props.navigation.navigate({
        routeName: 'recipe',
        params: {
          title: itemData.item.title,
          id: itemData.item.id,
          isFav: isFav
        }
      })
    }
    }/>
  }

  return (<View style={styles.screen}>
      <FlatList
        keyExtractor={(item) => item.title}
        data={props.listData}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
  },
});

export default MealsList;