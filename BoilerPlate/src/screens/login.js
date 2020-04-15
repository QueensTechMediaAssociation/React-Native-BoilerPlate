import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from '../styles/styles.js';
import auth from '@react-native-firebase/auth';



function authenticate(email, pwd){
    email = email.trim();
    pwd = pwd.trim();
    auth()
    .createUserWithEmailAndPassword(email, pwd)
    .then(() => {
      console.log('User account created & signed in!');
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








export default function LoginScreen()  {
    const [email, setEmail] = React.useState('');
    const [pwd, setPWD] = React.useState('');
    
        
        return(
            
            <View style={styles.container}> 
                <Text style={styles.greeting}> {'Welcome to the QTMA React Native Boiler Kit'}</Text>
                
                <View style={styles.form}> 
                    <View> 
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput style={styles.inputBox} 
                    autoCapitalize="none" 
                    onChangeText={(val) => setEmail(val)}> </TextInput>
                    </View>

                    <View style= {{ marginTop:32}}> 
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.inputBox}
                    secureTextEntry={true}
                    autoCapitalize="none" 
                    onChangeText={(val) => setPWD(val)}> </TextInput>
                    <Text>{email} {pwd} </Text>
                    </View>
                
                </View>
                
                <TouchableOpacity style={styles.button} onPress={() => authenticate(email, pwd)}> 
                    <Text style={{color:"#FFF", fontWeight: "500"}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}> 
                    <Text style={styles.signUpButton}>New to the boiler plate? <Text style={{color:'#E9446A'}}>SignUp</Text></Text>
                </TouchableOpacity>


            </View>
        );
    
}


