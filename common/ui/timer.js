import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/index.native';
import {instructions} from '../utils'
import TimerComp from '../components/Timer'


export default function Timer() {
  return (
    <View style={globalStyles.container}>
      <TimerComp/>
    </View>
  );
}