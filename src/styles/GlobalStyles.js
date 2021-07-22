import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: -45,
        textAlign: 'center',
        color: Colors.Text,

    },
    screenContainer: {
        flex: 1,
        paddingTop: 0,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        // alignItems: 'center',
        // justifyContent: 'flex-start'
        backgroundColor: Colors.accent
    },
    buttonText: {
        color: Colors.buttonText,
        fontSize: 20,
        textAlign: 'center'
    },
    droidSafeArea: {
        flex: 1,

    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 35,
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10
    },
    image: {
        width: 300,
        height: 300,
        left:10,
        top:10,
    },
});