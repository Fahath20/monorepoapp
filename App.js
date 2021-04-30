import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './common/business/routes/drawer';
import store from './common/business/redux/store';

export default class App extends React.Component {
  
	render() {
		return (
			<Provider store={store}>
       		  <Navigator/>
			</Provider>
		);
	}
}


