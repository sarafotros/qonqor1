import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile({ setIsLoggedin }) {
	return (
		<SafeAreaView>
			<Text>Profile</Text>
			<Button
				title="LOG OUT"
				onPress={() => {
					setIsLoggedin(false);
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
