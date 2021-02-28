import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {MEALS_DATA} from "../data/MEALS_DATA";
import CategoryTile from "../components/CategoryTile";

const StartScreen = props => {

  const renderGridItem = itemData => {
    return <CategoryTile
      item={itemData.item}
      onSelect={() => {
        props.navigation.navigate({
          routeName: 'meals',
          params: {
            itemId: itemData.item.id
          }
        })
      }
      }/>;
  }

  return (
    <FlatList
      data={MEALS_DATA}
      renderItem={renderGridItem}
      numColumns={2}/>
  );
}

StartScreen.navigationOptions = {
  headerTitle: 'First Screen',
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItemStyle: {
    flex: 1,
    margin: 15,
    justifyContent: 'space-between',
    height: 150
  },
  text: {
    fontFamily: 'open-sans-bold'
  }
});

export default StartScreen;