import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

type LoginScreenNavigationProp = StackNavigationProp<
	RootStackParamList,
	'Login'
>;
type RootStackParamList = {
	Login: undefined;
};

interface LoginProps {
	navigation: LoginScreenNavigationProp;
	route: any;
}

const Login: React.FC<LoginProps> = ({ route, navigation }) => {
	console.log(route.params);
	return (
		<SafeAreaView>
			<View>
				<Text>{route.params.name}</Text>
				<Button title="SIGN UP" onPress={() => navigation.goBack()} />
			</View>
		</SafeAreaView>
	);
};

export default Login;
const styles = StyleSheet.create({});
