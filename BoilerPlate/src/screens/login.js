import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native'
import { styles } from '../styles/styles.js';



export default class LoginScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}> 
                <Text style={styles.greeting}> {'Welcome to the QTMA React Native Boiler Kit'}</Text>
                
                <View style={styles.form}> 
                    <View> 
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput style={styles.inputBox} autoCapitalize="none"> </TextInput>
                    </View>

                    <View style= {{ marginTop:32}}> 
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.inputBox} autoCapitalize="none"> </TextInput>
                    </View>
                
                </View>
                
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}> 
                    <Text style={{color:"#FFF", fontWeight: "500"}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}> 
                    <Text style={styles.signUpButton}>New to the boiler plate? <Text style={{color:'#E9446A'}}>SignUp</Text></Text>
                </TouchableOpacity>


            </View>
        );
    }
}


