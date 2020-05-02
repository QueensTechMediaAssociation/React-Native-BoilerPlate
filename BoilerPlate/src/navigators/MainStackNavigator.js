import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Drawer/home'
import LoadingScreen from '../screens/Drawer/loading'
import SettingsScreen from '../screens/Drawer/settings'


const Drawer = createDrawerNavigator();

export function MainStackNavigator() {


  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}>
      <Drawer.Screen name={'Home'} component={HomeScreen}/>
      <Drawer.Screen name={'Loading'} component={LoadingScreen}/>
      <Drawer.Screen name={'Settings'} component={SettingsScreen}/>
    </Drawer.Navigator>
  );
}