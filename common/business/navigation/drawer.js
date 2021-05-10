import React from 'react';
import { View, Text } from 'react-native'; 
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {createBrowserApp} from '@react-navigation/web';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import MembersStack from './membersStack';
import TimerStack from './timerStack';
import MyScreen from '../../ui/MyScreen'
import {globalStyles} from '../../styles'
import {Platform} from "react-native";
const isWeb = Platform.OS === 'web';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  MyVacations: {
    screen: HomeStack,
  },
  MyPosts: {
    screen: AboutStack,
  },
  Members: {
    screen: MembersStack,
  },
  Watch: {
    screen: TimerStack,
  },
  MyScreen: { 
    screen: MyScreen,
    navigationOptions: {
      title: 'My Screen',
      drawerLabel: ({ tintColor, focused }) => {

        return (
          <Text style={globalStyles.titleText}>   {isWeb ? "Web Only" : "Mobile Only"}</Text>
        );
      }
    }
  },
});

//export default createAppContainer(RootDrawerNavigator);

const container = isWeb ? createBrowserApp(RootDrawerNavigator): createAppContainer(RootDrawerNavigator);

export default container;