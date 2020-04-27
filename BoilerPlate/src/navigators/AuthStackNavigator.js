import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Authentication/loginScreen';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
    return (
      <AuthStack.Navigator screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
        <AuthStack.Screen name={'LoginScreen'} component={LoginScreen}/>
      </AuthStack.Navigator>
    );
  }