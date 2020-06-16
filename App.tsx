import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

import AuthNavigator from './navigation/AuthNavigator';
import HomeNavigator from './navigation/HomeNavigator';
import SplashScreen from './components/SplashScreen';

export default function App() {
	const [isLoggedin, setIsLoggedin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		AsyncStorage.getItem('token', (error, result) => {
			setIsLoading(false);
			console.log(result);
			if (result) {
				setIsLoggedin(true);
			}
		});
	}, []);

	if (isLoading) {
		return <SplashScreen />;
	}
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
