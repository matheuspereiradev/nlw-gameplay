import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { style } from './style';
import { colors } from '../../values/colors';

type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    const { blue80, blue100 } = colors;

    return (
        <LinearGradient
            style={style.container}
            colors={[blue80, blue100]}
        >
            {children}
        </LinearGradient>
    )
}