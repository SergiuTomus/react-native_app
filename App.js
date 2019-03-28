import React, { Component } from "react";
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import AuthScreen from './src/screens/AuthScreen';
import SharePlaceScreen from './src/screens/SharePlaceScreen';
import FindPlaceScreen from './src/screens/FindPlaceScreen';
import PlaceDetailScreen from './src/screens/PlaceDetailScreen';


const AppBottomNavigator = createBottomTabNavigator(
  {
    "Find Place": FindPlaceScreen,
    "Share Place": SharePlaceScreen

  },
  {
    initialRouteName: "Find Place"
  }
);

const PlacesStackNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    FindPlace: AppBottomNavigator,
    PlaceDetail: PlaceDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  }
);

const AppContainer = createAppContainer(PlacesStackNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}