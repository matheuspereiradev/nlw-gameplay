import { StyleSheet } from 'react-native'
import { colors } from '../../values/colors'
import { fonts } from '../../values/fonts'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 360,
    },
    title: {
        color: colors.textsColors,
        fontSize: 40,
        textAlign: 'center',
        fontFamily: fonts.title700,
        marginBottom: 16,
        lineHeight: 40
    },
    subtitle: {
        color: colors.textsColors,
        fontSize: 16,
        lineHeight: 25,
        fontFamily: fonts.title500,
        textAlign: 'center',
        marginBottom: 64
    },
    content: {
        marginTop: -65,
        paddingHorizontal: 30
    },
    text: {
        color: 'white',
        height: 30,
        width: 200,
        borderBottomWidth: 2
    }
})