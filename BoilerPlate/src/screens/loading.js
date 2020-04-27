import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles.js';

Loading = () =>
    <View style={styles.center}>
        <Text style={styles.title}>Loading</Text>
    </View>

export default Loading;