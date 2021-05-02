import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../../components/header';
import Timer from '../../ui/timer';

const screens = {
  play: {
    screen: Timer,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Play' navigation={navigation} />
      }
    },
  },
};

// home stack navigator screens
const TimerStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default TimerStack;



