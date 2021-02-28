import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import MealTile from "./MealTile";

const MealsList = props => {

  const renderMealItem = itemData => {
    return <MealTile item={itemData.item} onSelect={() => {
      props.navigation.navigate({
        routeName: 'recipe',
        params: {
          item: itemData.item
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
  },
});

export default MealsList;