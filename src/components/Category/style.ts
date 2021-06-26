import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';
import { fonts } from '../../values/fonts';

export const style = StyleSheet.create({
    container: {
        width: 98,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    title: {
        fontFamily: fonts.title700,
        color: colors.textsColors,
        fontSize: 15,
        marginTop: 15
    },
    check: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 12,
        height: 12,
        backgroundColor: colors.blue100,
        borderColor: colors.blue50,
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: colors.backgroundSecundary,
        borderRadius: 3
    }
});