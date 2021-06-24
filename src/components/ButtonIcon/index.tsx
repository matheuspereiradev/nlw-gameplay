import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { style } from './style';
import Discord from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
    text: string
}

export function ButtonIcon({ text, ...all }: Props) {

    return (
        <TouchableOpacity style={style.container} {...all}>
            <View style={style.iconWrapper}>
                <Image source={Discord} style={style.icon} />
            </View>
            <Text style={style.title}>{text}</Text>
        </TouchableOpacity>
    );
}
