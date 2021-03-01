import React, {useState, useCallback, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/HeaderButton";
import Switcher from "../components/Switcher";
import Colors from "../templates/Colors";

const FiltersScreen = props => {
  const {navigation} = props;
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isGlutenFree, setIsGlutenFree] = useState(false);

  const saveFilters = useCallback(() => {
    const filtersState = {
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
      glutenFree: isGlutenFree,
    }
  }, [isVegan, isVegetarian, isLactoseFree, isGlutenFree]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.subHeaderStyle}>Available filters</Text>
      <Switcher
        onChange={newValue => setIsVegan(newValue)}
        value={isVegan}
      >Vegan</Switcher>
      <Switcher
        onChange={newValue => setIsVegetarian(newValue)}
        value={isVegetarian}
      >Vegetarian</Switcher>
      <Switcher
        onChange={newValue => setIsGlutenFree(newValue)}
        value={isGlutenFree}
      >Gluten free</Switcher>
      <Switcher
        onChange={newValue => setIsLactoseFree(newValue)}
        value={isLactoseFree}
      >Lactose free</Switcher>
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
          }}
          color={Colors.mainColor}
        />
      </HeaderButtons>)
    },
    headerRight: () => {
      return (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName='ios-save'
          title='Save'
          onPress={() => {
            props.navigation.getParam('save')();
          }}
          color={Colors.mainColor}
        />
      </HeaderButtons>)
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 20,
  },
  subHeaderStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'open-sans-bold',
    paddingBottom: 10,
  }
});

export default FiltersScreen;