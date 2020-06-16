import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUp() {
	const navigation = useNavigation();
	return (
		<SafeAreaView>
			<View>
				<Text>Sign Up</Text>
				<Button
					onPress={() => navigation.navigate('login', { name: 'welcome' })}
					title="LOGIN"
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
