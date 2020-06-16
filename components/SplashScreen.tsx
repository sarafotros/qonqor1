import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
	return (
		<View style={styles.container}>
			<Text>LOADING ... </Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red',
	},
});
