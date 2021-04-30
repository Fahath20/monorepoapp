import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/index.native';
import LikeButton from '../components/LikeButton'
//import MLikeButton from '../components/mobile/MLikeButton'
import {instructions} from '../utils'
import {Platform} from "react-native";

const isWeb = Platform.OS === 'web';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>{instructions('En')}</Text>
      <LikeButton/>
    </View>
  );
}