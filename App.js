import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './common/business/navigation/drawer';
import store from './common/business/redux/store';


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//Launch point
export default class App extends React.Component {
  
	render() {
		return (
			<Provider store={store}>
				<PaperProvider>
      				<Navigator />
    			</PaperProvider>
			</Provider>
		);
	}
}


