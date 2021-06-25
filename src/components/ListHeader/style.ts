import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';
import { fonts } from '../../values/fonts';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: fonts.title700,
        color: colors.textsColors,
        fontSize: 18,
    },
    subtitle: {
        fontFamily: fonts.text400,
        color: colors.highlight,
        fontSize: 13,
    }
});