import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from '../../styles/styles.js';

Loading = () =>
    <View style={styles.activity}>
        <ActivityIndicator size="large" color="#E9446A"></ActivityIndicator>
    </View>

export default Loading;