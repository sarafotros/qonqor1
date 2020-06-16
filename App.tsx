import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';

import AuthNavigator from './navigation/AuthNavigator';
import HomeNavigator from './navigation/HomeNavigator';

export default function App() {
	return (
		<NavigationContainer>
			{/* <AuthNavigator /> */}
			<HomeNavigator />
		</NavigationContainer>
	);
}
