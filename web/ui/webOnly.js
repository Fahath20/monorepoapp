import React, { Component } from "react";
import { connect } from 'react-redux';
import {getLanguageConfig, defaultLanguage} from '../../common/configuration/language'
import {setLanguage} from '../../common/business/redux/actions/localizationActions'

class WebOnly extends Component {
  state = {};
componentDidMount() {
  this.props.setLanguage(defaultLanguage)

}
  render() {
    const {language} = this.props
    return (
      <div className="LikeButton">
        <h1>{getLanguageConfig(language ? language : "en").how}</h1>
      </div>
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
)(WebOnly);
