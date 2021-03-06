import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../../components/header';
import Home from '../../ui/home';
import ReviewDetails from '../../ui/reviewDetails';
import {Platform} from "react-native";
const isWeb = Platform.OS === 'web';

const screens = {
  users: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='My Vacations' navigation={navigation} />
      }
    },
  },
  details: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default HomeStack;



