import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/index.native';
import LikeButton from '../components/LikeButton'
//import MLikeButton from '../components/mobile/MLikeButton'
import {Platform} from "react-native";
import Paper from '../components/paper'
import StyledComponent from '../components/Styled'


const isWeb = Platform.OS === 'web';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <StyledComponent/>
    </View>
  );
}