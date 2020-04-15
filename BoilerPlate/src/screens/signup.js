import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'
import { styles } from '../styles/styles.js';

export default class SignUp extends React.Component {
    render() {
        return(
<View style={styles.container}> 
<Text style={styles.greeting}> {'Welcome to the QTMA React Native Boiler Kit'}</Text>

<View style={styles.form}> 

    <View style={styles.input}>
    <Text style={styles.inputTitle}>Name</Text>
    <TextInput style={styles.inputBox}> </TextInput>
    </View>
    <View style={styles.input}>
    <Text style={styles.inputTitle}>Email Address</Text>
    <TextInput style={styles.inputBox} autoCapitalize="none"> </TextInput>
    </View>

<View style={styles.input}>
    <Text style={styles.inputTitle}>Password</Text>
    <TextInput style={styles.inputBox} autoCapitalize="none"> </TextInput>
</View>
<View style={styles.input}>
    <Text style={styles.inputTitle}>Re-Enter Password</Text>
    <TextInput style={styles.inputBox} autoCapitalize="none"> </TextInput>
</View>
    


</View>

<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}> 
    <Text style={{color:"#FFF", fontWeight: "500"}}>SignUp</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreen')}> 
    <Text style={styles.signUpButton}>Already Have an Account? <Text style={{color:'#E9446A'}}>Login</Text></Text>
</TouchableOpacity>


</View>

);
}
}