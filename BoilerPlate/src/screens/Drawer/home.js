import React, { Component } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { styles } from '../../styles/styles.js';
import signout from '../../firebase/functions'
import auth from '@react-native-firebase/auth';

class HomeScreen extends Component {

    render(){
        return(
            
            <ScrollView backgroundColor="pink">
                <Text>Hey Guys</Text>
            </ScrollView>
            
        );
    }

}

export default HomeScreen;