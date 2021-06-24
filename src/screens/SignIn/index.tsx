import React from 'react';
import { Text, View, Image, Button, StatusBar } from 'react-native';
import { style } from './style';
import Illustration from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export function SignIn() {

    return (
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
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
                <ButtonIcon text="Entrar com discord" activeOpacity={0.7} />
            </View >


        </View >
    );
}
