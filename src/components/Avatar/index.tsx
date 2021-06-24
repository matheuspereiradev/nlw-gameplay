import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { style } from './style';
import { colors } from '../../values/colors';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { blue50, blue70 } = colors;

    return (
        <LinearGradient
            style={style.container}
            colors={[blue50, blue70]}
        >
            <Image
                source={{ uri: urlImage }}
                style={style.avatar}
            />
        </LinearGradient>
    )

}