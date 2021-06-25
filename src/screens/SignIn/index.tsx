import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { style } from './style';
import Illustration from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const { navigate } = useNavigation();

    function handleLogin() {
        navigate('Home')
    }

    return (
        <View style={style.container}>
            <Image source={Illustration} style={style.image} resizeMode="stretch" />

            <View style={style.content}>
                <Text style={style.title}>
                    Conecte-se {"\n"}
                    e organize suas{"\n"}
                    jogatinas
                </Text>
                <Text style={style.subtitle}>
                    Crie grupos para jogar seus games{"\n"}
                    favoritos com seus amigos
                </Text>
                <ButtonIcon text="Entrar com discord" onPress={handleLogin} />
            </View >


        </View >
    );
}
