import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Profile from '../screens/home/Profile';
import Search from '../screens/home/Search';
import { AntDesign } from '@expo/vector-icons';

export default function HomeNavigator({ setIsLoggedin }) {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: 'tomato',
				inactiveTintColor: 'gray',
			}}
			screenOptions={{}}
		>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign
							name="home"
							size={focused ? 26 : 20}
							color={focused ? 'tomato' : 'grey'}
						/>
					),
				}}
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign
							name="user"
							size={focused ? 26 : 20}
							color={focused ? 'tomato' : 'grey'}
						/>
					),
				}}
				name="Profile"
			>
				{(props) => <Profile {...props} setIsLoggedin={setIsLoggedin} />}
			</Tab.Screen>
			<Tab.Screen
				options={{
					tabBarIcon: ({ focused, color, size }) => (
						<AntDesign
							name="search1"
							size={focused ? 26 : 20}
							color={focused ? 'tomato' : 'grey'}
						/>
					),
				}}
				name="Search"
				component={Search}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});
