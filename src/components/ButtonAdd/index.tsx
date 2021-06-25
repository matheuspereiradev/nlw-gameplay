import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { style } from './style';
import { colors } from '../../values/colors';

export function ButtonAdd({ ...rest }: RectButtonProps) {
    return (
        <RectButton
            style={style.container}
            {...rest}
        >
            <MaterialCommunityIcons
                name="plus"
                color={colors.textsColors}
                size={24}
            />
        </RectButton>
    )
}