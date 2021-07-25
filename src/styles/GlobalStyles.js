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
    title1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        top:-10,
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
        marginHorizontal: 10,
        
    },
    image: {
        width: 300,
        height: 300,
        left:10,
        top:10,
    },
    image1: {
        width: 400,
        height: 100,
        left:-50,
        top:10,
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 2,
        top:20,
        textAlign:'justify',
        color: Colors.Text1,
       
    },
    text2:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: -10,
        top:20,
        textAlign:'justify',
        color: Colors.Text1, 
    },
   
});