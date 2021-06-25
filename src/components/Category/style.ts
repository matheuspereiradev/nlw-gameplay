import { StyleSheet } from 'react-native';
import { colors } from '../../values/colors';
import { fonts } from '../../values/fonts';

export const style = StyleSheet.create({
    container: {
        width: 100,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        backgroundColor: colors.blue40,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7
    },
    title: {
        fontFamily: fonts.title500,
        color: colors.textsColors,
        fontSize: 15
    },
    check: {
        width: 12,
        height: 12,
        backgroundColor: colors.blue100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: colors.blue50,
        borderWidth: 2,
        borderRadius: 3
    },
    checked: {
        width: 10,
        height: 10,
        backgroundColor: colors.backgroundSecundary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3
    }
});