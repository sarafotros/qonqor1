import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({ setIsLoggedin }) {
	const onLogout = () => {
		AsyncStorage.removeItem('token', () => {
			setIsLoggedin(false);
		});
	};

	return (
		<SafeAreaView>
			<Text>Profile</Text>
			<Button title="LOG OUT" onPress={onLogout} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
