import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import {createBrowserApp} from '@react-navigation/web';

// stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import ProfileStack from './profileStack';

import {Platform} from "react-native";

const isWeb = Platform.OS === 'web';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  About: {
    screen: AboutStack,
  },
  Profile: {
    screen: ProfileStack,
  },
});

//export default createAppContainer(RootDrawerNavigator);

const container = isWeb ? createBrowserApp(RootDrawerNavigator): createAppContainer(RootDrawerNavigator);

export default container;