import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/authorization/Login';
import SignUp from '../screens/authorization/SignUp';

const Stack = createStackNavigator();

export default function AuthNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="signUp" component={SignUp} />
			<Stack.Screen name="login" component={Login} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
