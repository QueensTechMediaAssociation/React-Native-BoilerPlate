import React from 'react';
import { withFormik } from 'formik';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import * as yup from 'yup';
import { styles } from '../../styles/styles';


const AuthForm = (props) => {


        function displayLogin(){
          return(
          <View style={styles.container}>
            <Text style={styles.greeting}> {'Welcome to the QTMA React Native Boiler Kit'}</Text>
          <View style={styles.form}>
          <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput style={styles.inputBox} 
            autoCapitalize="none" 
            onChangeText={text => props.setFieldValue('email', text)}></TextInput>

          <Text style={styles.inputTitle}>Password</Text>
          <TextInput style={styles.inputBox}
          secureTextEntry={true}
          autoCapitalize="none" 
          onChangeText={text => props.setFieldValue('password', text)}>
          </TextInput>

          <TouchableOpacity style={styles.button} onPress={() => props.handleSubmit()}> 
            <Text style={{color:"#FFF", fontWeight: "500"}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.switchAuthMode()}> 
            <Text style={styles.signUpButton}>New to the boiler plate? <Text style={{color:'#E9446A'}}>SignUp</Text></Text>
          </TouchableOpacity>
          </View>
          </View>
          );
        }

        function displayRegister(){
          return(
          <View style={styles.container}>
            <Text style={styles.greeting}> {'Welcome to the QTMA React Native Boiler Kit'}</Text>
          <View style={styles.form}>
          <View style={styles.input}>
                 <Text style={styles.inputTitle}>Name</Text>
                 <TextInput style={styles.inputBox}
                 onChangeText={text => props.setFieldValue('displayName', text)}> </TextInput>
          </View>
          <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput style={styles.inputBox} 
            autoCapitalize="none" 
            onChangeText={text => props.setFieldValue('email', text)}></TextInput>

          <Text style={styles.inputTitle}>Password</Text>
          <TextInput style={styles.inputBox}
          secureTextEntry={true}
          autoCapitalize="none" 
          onChangeText={text => props.setFieldValue('password', text)}>
          </TextInput>

          <View style={styles.input}>
                 <Text style={styles.inputTitle}>Re-Enter Password</Text>
                 <TextInput style={styles.inputBox} autoCapitalize="none"
                    onChangeText={text => props.setFieldValue('rePWD', text)}
                    secureTextEntry={true}></TextInput>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => props.handleSubmit()}> 
            <Text style={{color:"#FFF", fontWeight: "500"}}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.switchAuthMode()}> 
            <Text style={styles.signUpButton}>Already Have an Account? <Text style={{color:'#E9446A'}}>Login</Text></Text>
          </TouchableOpacity>
          </View>
          </View>
          );

}
if(props.authMode=='signup'){
  return(
    displayRegister()
  )
}
return(
  displayLogin()
)

  }
    
      
    


  

export default withFormik({
    mapPropsToValues: () => ({ email: '', password: '', rePWD: '', displayName: '' }),
    validationSchema: (props) => yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(10).required(),
      displayName: props.authMode === 'signup' ?
        yup.string().min(5).required() : null
    }),
    handleSubmit: (values, { props }) => {
      props.authMode === 'login' ? props.login(values) : props.signup(values)
      
    },
  })(AuthForm);
  