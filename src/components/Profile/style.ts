import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';
import { fonts } from '../../values/fonts';

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: fonts.title500,
        fontSize: 24,
        color: colors.textsColors,
        marginRight: 6
    },
    username: {
        fontFamily: fonts.title700,
        fontSize: 24,
        color: colors.textsColors
    },
    message: {
        fontFamily: fonts.text400,
        color: colors.highlight
    }
});