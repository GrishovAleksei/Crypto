import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'
import TickerScreen from '../screens/TickerScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={TabsNavigator}
      />
      <Stack.Screen
        name="TickerScreen"
        component={TickerScreen}
      />
    </Stack.Navigator>
  );
}
