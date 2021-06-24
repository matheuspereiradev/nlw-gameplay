import { StyleSheet } from 'react-native'
import { colors } from '../../values/colors'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundPrimary,
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
        fontWeight: '700',
        marginBottom: 16
    },
    subtitle: {
        color: colors.textsColors,
        fontSize: 16,
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