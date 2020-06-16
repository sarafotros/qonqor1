import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './navigation/AuthNavigator';
import HomeNavigator from './navigation/HomeNavigator';

export default function App() {
	const [isLoggedin, setIsLoggedin] = useState(false);

	return (
		<NavigationContainer>
			{isLoggedin ? (
				<HomeNavigator setIsLoggedin={setIsLoggedin} />
			) : (
				<AuthNavigator setIsLoggedin={setIsLoggedin} />
			)}
		</NavigationContainer>
	);
}
