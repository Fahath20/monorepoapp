import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../../components/header';
import Members from '../../ui/members';

const MembersStack = () => {
  return <Members/>
}

const screens = {
  profiles: {
    screen: MembersStack,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Members' navigation={navigation} />
      }
    },
  },
}

const MembersStackNavigator = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default MembersStackNavigator;