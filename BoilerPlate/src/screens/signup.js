import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'
import { styles } from '../styles/styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';


function signUp(name, email, pwd, rePWD, { navigation }){
    name = name.trim();
    email = email.trim();
    pwd = pwd.trim();
    rePWD = rePWD.trim();

    auth()
    .createUserWithEmailAndPassword(email, pwd)
    .then(() => {
        
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });

}








export default function SignUp({ navigation }) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [pwd, setPWD] = React.useState('');
    const [rePWD, setrePWD] = React.useState('');
    
        return(
<View style={styles.container}> 
<Text style={styles.greeting}> {'Welcome to the QTMA React Native Boiler Kit'}</Text>

<View style={styles.form}> 

    <View style={styles.input}>
    <Text style={styles.inputTitle}>Name</Text>
    <TextInput style={styles.inputBox}
     onChangeText={(val) => setName(val)}> </TextInput>
    </View>
    <View style={styles.input}>
    <Text style={styles.inputTitle}>Email Address</Text>
    <TextInput style={styles.inputBox} autoCapitalize="none"
        onChangeText={(val) => setEmail(val)}
    > </TextInput>
    </View>

<View style={styles.input}>
    <Text style={styles.inputTitle}>Password</Text>
    <TextInput style={styles.inputBox} autoCapitalize="none"
     onChangeText={(val) => setPWD(val)}
     secureTextEntry={true}
    > </TextInput>
</View>
<View style={styles.input}>
    <Text style={styles.inputTitle}>Re-Enter Password</Text>
    <TextInput style={styles.inputBox} autoCapitalize="none"
     onChangeText={(val) => setrePWD(val)}
     secureTextEntry={true}
    > </TextInput>
</View>
    


</View>

<TouchableOpacity style={styles.button} onPress={() => signUp(name, email, pwd, rePWD)}> 
    <Text style={{color:"#FFF", fontWeight: "500"}}>SignUp</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}> 
    <Text style={styles.signUpButton}>Already Have an Account? <Text style={{color:'#E9446A'}}>Login</Text></Text>
</TouchableOpacity>


</View>

);

}