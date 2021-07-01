import React from 'react';
import store from './store';
import Routes from './routes';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

const App = () => (
	<Provider store={store}>
		<StatusBar barStyle="light-content" backgroundColor="#312e38" />
		<Routes />
	</Provider>
);

export default App;
