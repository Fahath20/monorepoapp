import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../../styles';
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

//Basic native button
const AppButton = ({ onPress, title }) => (
	<TouchableOpacity onPress={onPress} style={globalStyles.appButtonContainer}>
	  <Text style={globalStyles.appButtonText}>Like</Text>
	</TouchableOpacity>
  );

export default AppButton;
