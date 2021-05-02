import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';
import Card from '../Card'

export default function Home({user}) {
  const {avatar, first_name, last_name} = user;

  return (
    <View style={styles.user}>
      <Card>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Text style={styles.name}>
        {first_name} {last_name}
      </Text>
      </Card>
    </View>
  );
}
