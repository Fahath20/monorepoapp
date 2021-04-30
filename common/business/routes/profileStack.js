import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../../components/header';
import Profile from '../../ui/profile';
import MyPost from '../../../web/ui/myPost';
import {isWeb} from '../../utils'

const ProfileTab = () => {
  return isWeb ? <MyPost/> : <Profile/>
}

const screens = {
  Profile: {
    screen: ProfileTab,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Profile' navigation={navigation} />
      }
    },
  },
}

const ProfileStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default ProfileStack;