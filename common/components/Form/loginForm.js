import React, { useState, Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import AppButton from '../../../components/AppButton'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from '../../business/redux/actions/loginAction';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  
  onLogin() {
    
  }

  render() {
    
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.username}
          onChangeText={(username) => this.props.saveUserName(username)}
          placeholder={'Username'}
          style={styles.input}
        />
       
        <AppButton title="Submit" size="sm" backgroundColor="#007bff"  onPress={this.onLogin.bind(this)}/>
        
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});


function mapStateToProps(state) {
	const { login } = state;
	return {
		login
	};
}

function mapDispatchToProps(dispatch) {
	return {
		saveUserName: bindActionCreators(actions.addUserName, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm);