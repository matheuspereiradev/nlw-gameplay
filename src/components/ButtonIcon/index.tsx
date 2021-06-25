import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, View, Image } from 'react-native';
import { style } from './style';
import Discord from '../../assets/discord.png'

type Props = RectButtonProps & {
    text: string
}

export function ButtonIcon({ text, ...all }: Props) {

    return (
        <RectButton style={style.container} {...all}>
            <View style={style.iconWrapper}>
                <Image source={Discord} style={style.icon} />
            </View>
            <Text style={style.title}>{text}</Text>
        </RectButton>
    );
}
