import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/index.native';
import Card from '../../common/components/card';
import {vacationsInfo} from "../utils";
import {Platform} from "react-native";
import config from '../configuration/allPlatform'

const isWeb = Platform.OS === 'web';
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState(vacationsInfo);

  return (
    <View style={globalStyles.container}>
      <FlatList horizontal = {config.rendering.renderCardsHorizantally} data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('details', item)}>
          <Card>
            <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}