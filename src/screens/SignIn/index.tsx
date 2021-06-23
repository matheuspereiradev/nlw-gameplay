import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Text, View, Image } from 'react-native';
import { style } from './style';
import Illustration from '../../assets/illustration.png'

export function SignIn() {
    const [name, setName] = useState('');

    return (
        <View style={style.container}>
            <Image source={Illustration} />
            <Text>Oi, {name}</Text>

        </View>
    );
}
