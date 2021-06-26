import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { style } from './style';
import { colors } from '../../values/colors';

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({
    title,
    icon: Icon,
    checked = false,
    hasCheckBox,
    ...rest
}: Props) {
    const { blue40, blue70, blue85, blue50 } = colors;

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={style.container}
                colors={[blue50, blue70]}
            >
                <LinearGradient
                    style={[style.content, { opacity: checked ? 1 : 0.5 }]}
                    colors={[checked ? blue85 : blue50, blue40]}
                >
                    {
                        hasCheckBox &&
                        <View style={
                            checked ? style.checked : style.check
                        } />
                    }

                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={style.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    );
}
