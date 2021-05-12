import React, { Component } from "react";
import { connect } from 'react-redux';
import {getLanguageConfig, defaultLanguage} from '../../../common/configuration/language'
import {setLanguage} from '../../../common/business/redux/actions/localizationActions'
import { View, Text, Button, Alert } from 'react-native'; 
import { globalStyles } from '../../styles/index.native';
import ThemeSample from "../themeNative";

//This component will render only in web, I made this to show we can add web specific UI rendering when needed
class MobileOnly extends Component {
  state = {};
componentDidMount() {
  this.props.setLanguage(defaultLanguage)

}
  render() {
    const {language} = this.props
    return (
        <View style={globalStyles.container}>
            <Text>{getLanguageConfig(language ? language : "en").how}</Text>
            <Button
        title="Open Menu"
        color="#f194ff"
        onPress={() => this.props.navigation.openDrawer()}
      />
            <ThemeSample/>

    </View>
      
    );
  }
}


function mapStateToProps(state) {
	const { language } = state.language;
	return {
		language
	};
}

export default connect(
	mapStateToProps,
	{setLanguage}
)(MobileOnly);
