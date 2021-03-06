import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/index.native';
import Card from '../components/card';

export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          { navigation.getParam('title') }
        </Text>
        <Text>{ navigation.getParam('body') }</Text>
        <Text>{ navigation.getParam('rating') }</Text>
      </Card>
    </View>
  );
}