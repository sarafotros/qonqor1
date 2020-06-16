import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AsyncStorage } from 'react-native';

export default function SignUp({ setIsLoggedin }) {
	const navigation = useNavigation();

	const onLogin = () => {
		AsyncStorage.setItem('token', 'success', () => setIsLoggedin(true));
	};

	return (
		<SafeAreaView>
			<View>
				<Text>Sign Up</Text>
				<Button
					onPress={() => navigation.navigate('login', { name: 'welcome' })}
					title="LOGIN"
				/>
			</View>
			<Button title="Login" onPress={onLogin} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
