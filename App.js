import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Navigation from "./navigation/Navigation";
import { createStore, combineReducers} from "redux";
import { Provider } from 'react-redux';

import mealsReducer from "./store/reducer/meals";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    }
  );
}

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  if (!isLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setIsLoaded(true)
      }}
      onError={() => {
        console.log('error')
      }}
    />
  }

  return <Provider store={store}><Navigation /></Provider>;
}