import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {DrawerActions} from "react-navigation-drawer";
import {MEALS_DATA} from "../data/MEALS_DATA";
import CategoryTile from "../components/CategoryTile";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../templates/Colors";

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

StartScreen.navigationOptions = props => {
  return {
    headerTitle: 'Categories',
    headerLeft: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName='ios-menu'
          title='Menu'
          color={Colors.mainColor}
          onPress={() => {
          props.navigation.toggleDrawer();
        }}
        />
      </HeaderButtons>)
    }
  }
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