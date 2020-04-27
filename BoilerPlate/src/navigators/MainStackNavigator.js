import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home'

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}>
      <MainStack.Screen name={'HomeScreen'} component={HomeScreen}/>
    </MainStack.Navigator>
  );
}