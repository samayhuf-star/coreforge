import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import WorkoutScreen from './src/screens/WorkoutScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import GeneratorScreen from './src/screens/GeneratorScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#18181b', borderTopColor: '#27272a' },
        tabBarActiveTintColor: '#a3e635',
        tabBarInactiveTintColor: '#a1a1aa',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Generator" component={GeneratorScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Paywall" component={PaywallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
