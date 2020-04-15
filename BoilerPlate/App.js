import * as React from 'react';
import {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Settings from './src/screens/drawer/settings';
import LoginScreen from './src/screens/login';
import SignUp from './src/screens/signup';
import Home from './src/screens/home';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createBottomTabNavigator();


export default class App extends Component {

  createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{
        title: "Login Screen",
        headerStyle: { backgroundColor: "#E9446A" },
        headerTintColor: "white"
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        title: "SignUp",
        headerStyle: { backgroundColor: "#E9446A" },
        headerTintColor: "white"
      }}
    />
    <Stack.Screen
      name="Home"
      children={this.createDrawer}
      options={{
        title: "Home",
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white"
      }}
    />
    
    
  </Stack.Navigator>



createDrawer = () =>
<Drawer.Navigator>
  <Drawer.Screen name="Home" component={Home} />
  <Drawer.Screen name="Settings" component={Settings} />
</Drawer.Navigator>


  render(){
    return(
      <NavigationContainer>
        {this.createHomeStack()}

      </NavigationContainer>
    )
  }
}