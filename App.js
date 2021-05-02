import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './common/business/routes/drawer';
import store from './common/business/redux/store';


import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
  dark: true
};

export default class App extends React.Component {
  
	render() {
		return (
			<Provider store={store}>
				<PaperProvider theme={theme}>
      				<Navigator />
    			</PaperProvider>
			</Provider>
		);
	}
}


